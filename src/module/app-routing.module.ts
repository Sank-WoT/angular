import { NgModule }      from '@angular/core';
// пути по компонентам
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent }   from '../app/ab.component';
import { HomeComponent }   from '../app/home.component';
import { NotFoundComponent }   from '../app/404.component';
import { ItemComponent } from '../app/item.component'
// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'item/:id', component: ItemComponent},
    { path: '**', component: NotFoundComponent}
];
 //функциональность декоратора NgModule, без которой мы не сможем создать модуль 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, NotFoundComponent]