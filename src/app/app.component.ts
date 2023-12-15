import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	scrollToTop() {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}
}
