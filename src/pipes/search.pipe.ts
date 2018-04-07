import { Pipe, PipeTransform, Injectable} from '@angular/core';

@Pipe({
	name: 'filter'
})

@Injectable()
export class FilterPipe implements PipeTransform {
	transform(items: any[], field: string, value: string): any[] {
		if (!items) {
			return [];
		}

		if (!field || !value) {
			return items;
		}
		console.log(value);
		for (let i in items){
			console.log(items [i]);
		}
		console.log(field);

		return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
	}
}