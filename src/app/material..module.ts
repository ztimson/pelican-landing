import {NgModule} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

let modules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
