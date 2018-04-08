import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
// пути по компонентам
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent }   from './app.component';
// пути
import { AppRoutingModule, routingComponents }   from '../module/app-routing.module';
import { Item } from '../class/item'
import {DataService} from '../services/data.service'
import {HttpService} from '../services/http.service';
import {HttpBd} from '../services/HttpBd.service';
import { HomeComponent } from './home.component';
// элемент навигаци
import { NavComponent} from './nav.component';
// хлебные крошки
import { Breadcrumps } from '../app/breadcrumbs.component';
// элемент навигаци
import { SharedModule} from '../module/shared.module';
// генерация qr кодов
import { NgxQRCodeModule } from 'ngx-qrcode2';
// отдельный элемент
import { ItemComponent } from '../app/item.component';
// отдельный элемент
import { HeaderComponent } from '../app/header.component';
// модуль для создания форм
// футер
import { FooterComponent } from '../app/footer.component';
//функциональность декоратора NgModule, без которой мы не сможем создать модуль 
@NgModule({
    // другие модули
    imports: [ 
        BrowserModule, 
        FormsModule, 
        AppRoutingModule, 
        HttpClientModule,
        SharedModule,
        NgxQRCodeModule
    ],
    //классы представлений
    declarations: [ AppComponent, routingComponents, HomeComponent, NavComponent, 
    ItemComponent, HeaderComponent, FooterComponent],
    providers: [HttpService, DataService, HttpBd],
    // корневой компонент
    bootstrap:    [ AppComponent ]
})
export class AppModule { }