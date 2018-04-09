import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Item} from '../class/item';
import { NgForm} from '@angular/forms';
// импортирование сервиса
import { HttpService} from '../services/http.service';
import { DataService} from '../services/data.service';
import { HttpBd} from '../services/HttpBd.service';
import { ReactiveFormsModule, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ItemComponent } from '../app/item.component';
import { Breadcrumps } from '../app/breadcrumbs.component'

// определим компонент для проекта
@Component({
	selector: 'home-app',
	templateUrl: 'html/home.html',
    styleUrls: ["./css/home.css"]
})

export class HomeComponent implements OnInit { 
	// состояния оборудования
	stateOptions: string[] = ["Требуется ремонт", "В хорошем состоянии", "Списан"];

	// фильтры 
	filterOptions: string[] = ["Серийный номер", "Инвентарный номер", "Номер отделения", "qr код", "Фирма", "Модель"];

	// переменная отслеживания ошибок
	condition: boolean=true;

	// список значений
    items: Item[] = [];
    // список до изменения 
    itemsSave: Item[] = [];
    public searchString: string;

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
    addItem( serial_number: number, inventory_number: number, department_number: number, qr: string, firm: string, model: string, state: string): void {
       	if("" != this.data.correcteInput(serial_number, inventory_number, department_number, qr, firm, model, state)) {
       		this.condition = false;
       		console.log(this.data.correcteInput(serial_number, inventory_number, department_number, qr, firm, model, state));
       		return;
       	}
       		this.condition = true;
	        this.bd.doADD(serial_number, inventory_number, department_number, qr, firm, model, state).subscribe((data: Item[]) => {
	     	},
	      	(error: HttpErrorResponse) => {
	      		if(error.error instanceof Error) {
	      			console.log("Client error: " + JSON.stringify(error));
	      		}	else {
	      			console.log("Server error: " + JSON.stringify(error));
	      			console.log("error.message " + error.message);
	      		}
	      	});
	      	this.items = this.data.addData(this.items, serial_number, inventory_number, department_number, qr, firm, model, state);
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
    	if(this.edit == true) { 
    		this.itemsSave = JSON.parse(JSON.stringify(this.items));
    	}	else {
    		itemsEdit = this.diff(this.itemsSave, this.items);
    	}
    }

    diff(a1: Item[], a2: Item[]): Item[] {
    	let missing:Item[];
    	for(let i=0; i<a1.length; i++) {
    		if(JSON.stringify(a1[i]) != JSON.stringify(a2[i])) {
    			this.udpateID(a1[i].serial_number, a2[i].serial_number, a2[i].inventory_number, a2[i].department_number, a2[i].qr, a2[i].firm, a2[i].model, a2[i].state);
    		} 
    	}
    	return missing;
    }

    udpateID(alserial_number: number | string, serial_number:number | string, inventory_number: number, department_number: number, qr: string, firm: string, model: string, state: string) {
    	this.bd.doUpdate(alserial_number,serial_number,inventory_number, department_number, qr, firm, model, state ).subscribe((data: Item[]) => {
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
}