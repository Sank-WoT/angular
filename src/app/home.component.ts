import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {DataService} from './data.service'
import {Item} from './item';
import { NgForm} from '@angular/forms'
// импортирование сервиса
import { HttpService} from './http.service'
 
// определим компонент для проекта
@Component({
	selector: 'home-app',
	template: `<div class="page-header">
        <h1> Список покупок </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Название" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, price)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Предмет</th>
                    <th>Цена</th>
                    <th>Куплено</th>
                    <th>Удалить</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.purchase}}</td>
                    <td>{{item.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                    <td nowrap=nowrap><button (click)="delete(item)"><i class="icon-minus--sign"></i></button></td>
                </tr>
            </tbody>
        </table>
    </div>`,
})

export class HomeComponent implements OnInit { 
    items: Item[] = [];
    constructor(private dataService: DataService, private http: HttpService){}
    // инициализируем компонент
    ngOnInit(){     
      this.http.getData().subscribe((data: Item[]) => this.items = data["Stock"]);
      // this.items = this.dataService.getData();
    }

    // метод добавления привязанная к кнопке
    addItem(text: string, price: number): void {
        this.dataService.addData(text, price);
    }

    // метод удаления
    delete(item: Item): void {
    	this.dataService.delete(item);
    }
}