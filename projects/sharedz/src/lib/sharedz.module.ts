import { NgModule } from '@angular/core';
import { SharedzComponent, ExtendableComponent } from './sharedz.component';



@NgModule({
  declarations: [
    ExtendableComponent,
    SharedzComponent
  ],
  imports: [
  ],
  exports: [
    ExtendableComponent,
    SharedzComponent
  ]
})
export class SharedzModule { }
