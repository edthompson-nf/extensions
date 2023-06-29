import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedzModule} from "../../../sharedz/src/lib/sharedz.module";
import { ServiceHintComponent } from './service-hint/service-hint.component';
import {ExtendSharedzService} from "./extend-sharedz.service";
import {SHAREDZ_EXTENSION} from "../../../sharedz/src/lib/extendable/extensions-noop.service";

@NgModule({
  declarations: [
    AppComponent,
    ServiceHintComponent
  ],
  exports: [
    ServiceHintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedzModule
  ],
  providers: [
    {provide: SHAREDZ_EXTENSION, useClass: ExtendSharedzService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
