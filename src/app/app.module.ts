import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/footer/footer.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MaterialModule} from "./material.module";
import {ComingSoonComponent} from './view/coming-soon/coming-soon.component';
import {HomeComponent} from "./view/home/home.component";
import {NotFoundComponent} from './view/not-found/not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		CarouselComponent,
		ComingSoonComponent,
		ContactComponent,
		FooterComponent,
		HomeComponent,
		NotFoundComponent,
		ToolbarComponent,
	],
	imports: [
		BrowserModule,
		AppRouting,
		BrowserAnimationsModule,
		MaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
