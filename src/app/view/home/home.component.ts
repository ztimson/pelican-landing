import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	public day!: number;

	ngOnInit() {
		this.day = new Date().getDay();
	}
}
