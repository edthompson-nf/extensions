import {Component, inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SharedzService} from "./sharedz.service";
import {ExtensionService, SHAREDZ_EXTENSION} from "./extendable/extensions-noop.service";
import {ExtendableComponent} from "./extendable/extendable.component";

@Component({
  selector: 'lib-sharedz',
  templateUrl: './sharedz.component.html',
  styleUrls: ['./sharedz.component.scss']
})
export class SharedzComponent extends ExtendableComponent implements OnInit {

  data: any = {};
  roles: string[] = [];
  filter: any = {};
  configs: any = {};
  edgeRouters: any = {};
  configsTypes: any = {};
  editor: any = {};
  editData: any = {};
  configsObject: any = {};
  terminatorsObject: any = {};
  configsSelected: string[] = [];
  terminators: string[] = [];
  details: any = {};

  constructor(private svc: SharedzService
  ) {
    super();
  }

  ngOnInit(): void {
    this.configsObject.closeModals = false;
    this.terminatorsObject.closeModals = false;
  }
}
