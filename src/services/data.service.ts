import {Item} from '../class/item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HttpService} from '../services/http.service';
export class DataService {
    private Item: Item[] = [];

    addData(item: Item[], serial_number: number, inventory_number: number, department_number: number, qr: string, firm: string, model: string, state: string) : Item[] {
        let error: string;
        console.log(item);
        error = this.correcteInput(serial_number, inventory_number, department_number, qr, firm, model, state);
        console.log(error);
        if("" == error) {
            item.push(new Item(serial_number, inventory_number, department_number, qr, firm, model, state));
        }
        console.log(item);
        return item;
    }

    correcteInput(serial_number: number, inventory_number: number, department_number: number, qr: string, firm: string, model: string, state: string): string {
        if(null == serial_number || undefined == serial_number)
            return "serial_number";
        if(null == inventory_number || undefined == inventory_number)
            return "inventory_number";
        if(null == department_number || undefined == department_number)
            return "department_number";
        if(null == qr || undefined == qr || "" == qr.trim())
            return "qr";
        if(null == firm || undefined == firm || "" == firm.trim())
            return "firm";
        if(null == model || undefined == model || "" == model.trim())
            return "model";
        if(null == state || undefined == state || "" == state.trim())
            return "state";
        return "";
    }

    delete(items: Item[], item: Item): Item[]  {
        const index: number = items.indexOf(item);
        if(index !== -1) {
            items.splice(index, 1)
        }
        return items
    }

    selectItem(serialNumber: number) {
        if(null == serialNumber || undefined == serialNumber)
            return;
        return serialNumber;
    }
}