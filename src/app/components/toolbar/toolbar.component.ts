import {Component} from '@angular/core';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
	navItems: [string, string][] = [
		['Restaurant', '/coming-soon'],
		['Hunting', '/coming-soon'],
		['Fishing', '/coming-soon'],
		['Lodging', '/coming-soon'],
	]
}
