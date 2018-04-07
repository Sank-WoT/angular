import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { IItem } from '../class/itemInterface';
import {Item} from '../class/item';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 


@Injectable()
export class HttpBd{
  
    constructor(private http: HttpClient){ }
    url: string = "http://hello:80";
    doGet(): Observable<IItem[]> {
    	console.log("Get");
    	let paramUrl = `${this.url}/get.php`;
        return this.http.get<IItem[]>(this.url + "/get.php")
        	.catch(this.errorHandler)
    }

    doSelectItem(serial: number): Observable<IItem[]>  {
        return this.http.get<IItem[]>(this.url + "/select.php?serial_number=" + serial)
            .catch(this.errorHandler) 
    }

    errorHandler(error: HttpErrorResponse) {
    	return Observable.throw(error.message || "Server Error");    	
    }

    pushBd(){
        return this.http.get(this.url);
    }

    doADD(serial_number: number, inventory_number: number, department_number: number, qr: string, firm: string, model:string){
    	console.log("Delete");
    	let search = new URLSearchParams();
    	let urlFull = this.url + "/add.php?serial_number=" + serial_number +
        "&inventory_number=" + inventory_number + "&department_number=" + department_number + 
        "&qr=" + qr + "&firm=" + firm + "&model=" + model;
    	console.log(urlFull);
        return this.http.get(urlFull)
        	.catch(this.errorHandler);   	
    }

    doDELETE(item: Item): Observable<IItem[]> {
    	console.log("Delete");
    	let search = new URLSearchParams();
    	let param = <string>item['serial_number'] ;
    	console.log(this.url + "/delete.php");
        return this.http.get<IItem[]>(this.url + "/delete.php?serial_number=" + item['serial_number'])
        	.catch(this.errorHandler)   	
    }
}