import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
// пути по компонентам
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent }   from './app.component';
// пути
import { AppRoutingModule, routingComponents }   from './app-routing.module';
import { Item } from './item';

import {DataService} from './data.service';
import {HttpService} from './http.service';
 
//функциональность декоратора NgModule, без которой мы не сможем создать модуль 
@NgModule({
	// другие модули
    imports: [ 
    	BrowserModule, 
    	FormsModule, 
    	AppRoutingModule, 
    	HttpClientModule
    ],
    //классы представлений
    declarations: [ AppComponent, routingComponents],
    providers: [DataService, HttpService],
    // корневой компонент
    bootstrap:    [ AppComponent ]
})
export class AppModule { }