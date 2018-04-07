import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Item} from '../class/item';
import { NgForm} from '@angular/forms';
// импортирование сервиса
import { HttpService} from '../services/http.service';
import { DataService} from '../services/data.service';
import { HttpBd} from '../services/HttpBd.service';
import { ReactiveFormsModule, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {ItemComponent} from '../app/item.component';

// определим компонент для проекта
@Component({
	selector: 'home-app',
	templateUrl: 'html/home.html',
    styleUrls: ["./css/home.css"]
})

export class HomeComponent implements OnInit { 
	// список значений
    items: Item[] = [];
    // список до изменения 
    itemsSave: Item[] = [];
    public searchString: string;
    //
    done: boolean = false;

	// изменение таблицы   
    edit: boolean = false;

    //	
    text: string;

    elementType : 'url' | 'canvas' | 'img' = 'url';
	value : string = 'Techiediaries';

    constructor(private http: HttpService, private data: DataService, private bd: HttpBd){}
    // инициализируем компонент
    ngOnInit(){     
      this.bd.doGet().subscribe((data: Item[]) => {
      	this.items = data;
     	},
      	(error: HttpErrorResponse) => {
      		if(error.error instanceof Error) {
      			console.log("Client error: " + JSON.stringify(error));
      		}	else {
      			console.log("Server error: " + JSON.stringify(error));
      			console.log("error.message " + error.message);
      		}
      	}
      );
    }

    // метод добавления привязанная к кнопке
    addItem( serial_number: number, inventory_number: number, department_number: number, qr: string, firm: string, model: string): void {
           
            this.bd.doADD(serial_number, inventory_number, department_number, qr, firm, model).subscribe((data: Item[]) => {
	     	},
	      	(error: HttpErrorResponse) => {
	      		if(error.error instanceof Error) {
	      			console.log("Client error: " + JSON.stringify(error));
	      		}	else {
	      			console.log("Server error: " + JSON.stringify(error));
	      			console.log("error.message " + error.message);
	      		}
	      	}
	      );
        this.items = this.data.addData(this.items, serial_number, inventory_number, department_number, qr, firm, model);
    }

    // метод удаления
    delete(item: Item): void {
    	this.bd.doDELETE(item).subscribe((data: Item[]) => {
	     	},
	      	(error: HttpErrorResponse) => {
	      		if(error.error instanceof Error) {
	      			console.log("Client error: " + JSON.stringify(error));
	      		}	else {
	      			console.log("Server error: " + JSON.stringify(error));
	      			console.log("error.message " + error.message);
	      		}
	      	}
	      );
    	this.items = this.data.delete(this.items, item);
    }

    // метод изменения данных
    editItem(): void {
    	this.edit = !this.edit;
    	 // список до изменения 
    	let itemsEdit: Item[] = [];
    	console.log(this.edit);
    	if(this.edit == true)	{ 
    		this.itemsSave = this.clone(this.items);
    		console.log(this.itemsSave);
    		console.log(this.items);
    	}	else {
    		console.log(this.itemsSave);
    		console.log(this.items);
    		itemsEdit = this.diff(this.itemsSave, this.items);
    		console.log("Значения изменены: " + itemsEdit);
    	}
    }

   	clone(a1: Item[]): Item[]{
   		let a2: Item[];
   		let element: Item;
   		for (var key in a1) {
  			element = (Object.assign({}, a1[key]));
  			console.log(element);
  			a2.push(element);
		}
		return a2;
   	}

    diff(a1: Item[], a2: Item[]): Item[] {
    	let missing = a1.filter(item => a2.indexOf(item) < 0);
    	return missing;
    }

    // функция запросов
    submit(num: number){
        this.bd.doGet().subscribe((data: Item[]) => {
        	console.log(data);
        	this.text=data[0]['id']; this.done=true;
        });
    }
}