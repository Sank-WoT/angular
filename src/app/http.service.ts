import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService{
    constructor(private http: HttpClient) {}
    getData(){
        return this.http.get("./item.json");
    }
}