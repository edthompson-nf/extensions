import {Injectable} from '@angular/core';
import {ExtensionService} from "../../../sharedz/src/lib/extendable/extensions-noop.service";
import {ServiceHintComponent} from "./service-hint/service-hint.component";

@Injectable({
  providedIn: 'root'
})
export class ExtendSharedzService implements ExtensionService {

  constructor() { }

  extendAfterViewInits(extentionPoints: any): void {
    if(extentionPoints.beforeButtonsVC) {
      extentionPoints.beforeButtonsVC.createComponent(ServiceHintComponent);
    }
  }
}
