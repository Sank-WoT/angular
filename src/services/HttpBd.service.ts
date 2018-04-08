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
        return this.http.get<IItem[]>(this.url + "/get.php")
        	.catch(this.errorHandler)
    }

    doUpdate(al_serial_number: number | string, serial_number: number | string, inventory_number: number, department_number: number, qr: string, firm: string, model:string) {
        console.log("Get");
        let urlFull = this.url + "/update.php?al_serial_number=" + al_serial_number + "&serial_number=" + serial_number +
        "&inventory_number=" + inventory_number + "&department_number=" + department_number + 
        "&qr=" + qr + "&firm=" + firm + "&model=" + model;
        return this.http.get(urlFull)
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
    	if(null == serial_number || undefined == serial_number)
            return;
        if(null == inventory_number || undefined == inventory_number)
            return;
        if(null == department_number || undefined == department_number)
            return;
        if(null == qr || undefined == qr || "" == qr.trim())
            return;
        if(null == firm || undefined == firm || "" == firm.trim())
            return;
        if(null == model || undefined == model || "" == model.trim())
            return;
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