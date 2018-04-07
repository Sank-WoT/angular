import { Component, Input } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { HttpBd} from '../services/HttpBd.service';
import { DataService} from '../services/data.service';
import { Item } from '../class/item';
@Component({
	selector: 'ItemComponent',
	templateUrl: 'html/item.html',
	styleUrls: ["./css/item.css"]
})
export class ItemComponent {
    id: number;
    constructor(private activateRoute: ActivatedRoute, private bd: HttpBd){        
        this.id = activateRoute.snapshot.params['id'];
    }
	public items: Item[];
	aclass: string = "qrcode-resize";

	ngOnInit() { 
		this.bd.doSelectItem(this.id).subscribe((data: Item[]) => {
      		this.items = data;
     	},
   		(error: HttpErrorResponse) => {
	      		if(error.error instanceof Error) {
	      			console.log("Client error: " + JSON.stringify(error));
	      		}	else {
	      			console.log("Server error: " + JSON.stringify(error));
	      			console.log("error.message " + error.message);
	      		}
	      	}
	      );
	}
}


