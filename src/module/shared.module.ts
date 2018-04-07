import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FilterPipe} from '../pipes/search.pipe';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		FilterPipe
	],
	providers: [
	],
	exports: [
		FilterPipe
	]
})
export class SharedModule{}