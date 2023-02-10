import { Component, OnInit } from '@angular/core';

/** Tots Libraries */
import { TotsUsersSelectorMenuConfig } from '@tots/users-selector-menu';

import { TotsFilterBaseComponent } from '../tots-filter-base.component';

@Component({
  selector: 'tots-multi-users-filter',
  templateUrl: './multi-users-filter.component.html',
  styleUrls: ['./multi-users-filter.component.css']
})
export class MultiUsersFilterComponent extends TotsFilterBaseComponent implements OnInit {

  config = new TotsUsersSelectorMenuConfig();

  override ngOnInit(): void {
    super.ngOnInit();
    this.loadConfig();
  }

  loadConfig() {
    this.config.service = this.item.filter.extra.service;
    this.config.searchFields = this.item.filter.extra.searchFields;
    this.config.identifierField = this.item.filter.extra.identifierField;
    this.config.firstnameField = this.item.filter.extra.firstnameField;
    this.config.lastnameField = this.item.filter.extra.lastnameField;
    this.config.photoField = this.item.filter.extra.photoField;

    this.config.textButton = this.item.filter.extra.textButton;
    this.config.prependIcon = this.item.filter.extra.prependIcon;
  }
}
