import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComingSoonComponent} from './view/coming-soon/coming-soon.component';
import {HomeComponent} from "./view/home/home.component";
import {NotFoundComponent} from './view/not-found/not-found.component';

const routes: Routes = [
	{path: '', pathMatch: 'full', component: HomeComponent},
	{path: 'coming-soon', component: ComingSoonComponent},
	{path: '**', component: NotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRouting {}
