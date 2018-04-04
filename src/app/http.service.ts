import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Item} from './item';

@Injectable()
export class HttpService{
	private Item: Item[] = [];
	constructor(private http: HttpClient) {}
	setData(){
		this.getData().subscribe((data: Item[]) => this.Item = data["Stock"]);
	}
	getDataHttp(){
		this.setData();
		return Item;
	}
	getData(){
		return this.http.get("item.json");
	}
}