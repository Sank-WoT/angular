import { NgModule }      from '@angular/core';
// пути по компонентам
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent }   from './ab.component';
import { HomeComponent }   from './home.component';
import { NotFoundComponent }   from './404.component';
// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', component: NotFoundComponent }
];
 //функциональность декоратора NgModule, без которой мы не сможем создать модуль 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, NotFoundComponent]