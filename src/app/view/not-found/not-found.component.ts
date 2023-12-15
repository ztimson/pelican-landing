import {Component} from '@angular/core';

declare var navigation: any;

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html'
})
export class NotFoundComponent {
	back() {
		navigation.back();
	}
}
