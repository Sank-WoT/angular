import {Item} from '../class/item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HttpService} from '../services/http.service';
export class DataService {
    private Item: Item[] = [];

    addData(item: Item[], serial_number: number, inventory_number: number, department_number: number, qr: string, firm: string, model: string) : Item[] {
        console.log(item);
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
        if(null == model|| undefined == model || "" == model.trim())
            return;
        item.push(new Item(serial_number, inventory_number, department_number, qr, firm, model));
        console.log(item);
        return item;
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