import {Item} from './item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HttpService} from './http.service'
export class DataService{
    private Item: Item[] = [];

    setData(items: Item[]): void {
        this.Item = items;
    }

    getData(): Item[] {
        return this.Item;
    }

    addData(text: string, price: number) {
        if(text==null || text==undefined || text.trim()=="")
            return;
        if(price==null || price==undefined)
            return;
        this.Item.push(new Item(text, price));
    }

     delete(item: Item): void {
        const index: number = this.Item.indexOf(item);
        console.log(Item);
        console.log(this.Item);
        if(index !== -1) {
            this.Item.splice(index, 1)
        }
    }
}