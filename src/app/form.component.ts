import { Component } from '@angular/core';

import { Item } from '../class/item';
@Component({
	selector: 'form-app',
	templateUrl: '../app/html/form.html',
	styleUrls: ['../app/css/form.css']
})
export class FormaComponent {
	model = new Item(18, 10, 12, 'Chuck Overstreet','Chuck Overstreet', 'Chuck Overstreet', 'sdf');
	submitted = false;
	onSubmit() { this.submitted = true; }
	get diagnostic() { return JSON.stringify(this.model); }
}