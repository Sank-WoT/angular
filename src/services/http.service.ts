import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { IItem } from '../class/itemInterface';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService{
	url: string = "./item.json";
    constructor(private http: HttpClient) {}
    getData(): Observable<IItem[]>{
        return this.http.get<IItem[]>(this.url)
        	.catch(this.errorHandler)
    }

    errorHandler(error: HttpErrorResponse) {
    	return Observable.throw(error.message || "Server Error");    	
    }
}