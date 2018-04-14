import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';  
@Component({
    selector: 'about-app',
    templateUrl: 'html/about.html',
    styleUrls: ['../app/css/about.css']
})
export class AboutComponent {
	id: number;
	constructor(private activateRoute: ActivatedRoute){        
        this.id = activateRoute.snapshot.params['id'];
    }
 }