import {Component} from '@angular/core';

declare var navigation: any;

@Component({
	selector: 'app-coming-soon',
	templateUrl: './coming-soon.component.html'
})
export class ComingSoonComponent {
	back() {
		navigation.back();
	}
}
