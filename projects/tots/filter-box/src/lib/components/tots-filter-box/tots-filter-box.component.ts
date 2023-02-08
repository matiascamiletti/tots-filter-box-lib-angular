import { Component, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { TotsFilterBoxConfig } from '../../entities/tots-filter-box-config';
import { TotsItemFilter, TotsItemSelectedFilter } from '../../entities/tots-item-filter';

@Component({
  selector: 'tots-filter-box',
  templateUrl: './tots-filter-box.component.html',
  styleUrls: ['./tots-filter-box.component.css']
})
export class TotsFilterBoxComponent {

  @ViewChild('addFilterButton') addFilterButton!: MatMenuTrigger;

  @Input() config!: TotsFilterBoxConfig;

  actives: Array<TotsItemSelectedFilter> = [];
  hasChange: boolean = false;

  onApplyFilters() {
    
  }

  onClearFilters() {
    this.hasChange = true;
    this.actives = [];
    this.onApplyFilters();
  }

  onAddFilter(filter: TotsItemFilter) {
    this.hasChange = true;
    this.actives.push({ filter: filter, conditional: 0 });
    //this.loadOptionsExternal(filter);
    this.addFilterButton.closeMenu();
  }
}
