import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedzModule} from "../../../sharedz/src/lib/sharedz.module";
import {ExtensionsNoopService, SHAREDZ_EXTENSION} from "../../../sharedz/src/lib/extendable/extensions-noop.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedzModule
  ],
  providers: [
    {provide: SHAREDZ_EXTENSION, useClass: ExtensionsNoopService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
