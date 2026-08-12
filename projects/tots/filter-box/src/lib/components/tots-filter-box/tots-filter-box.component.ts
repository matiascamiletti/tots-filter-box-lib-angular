import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { TotsFilterBoxConfig } from '../../entities/tots-filter-box-config';
import { TotsItemFilter, TotsItemSelectedFilter } from '../../entities/tots-item-filter';

@Component({
  selector: 'tots-filter-box',
  templateUrl: './tots-filter-box.component.html',
  styleUrls: ['./tots-filter-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TotsFilterBoxComponent {

  @ViewChild('addFilterButton') addFilterButton!: MatMenuTrigger;
  @ViewChild('filterMainButton') filterMainButton!: MatMenuTrigger;

  @Input() config!: TotsFilterBoxConfig;

  @Output() apply = new EventEmitter<Array<TotsItemSelectedFilter>>();

  actives: Array<TotsItemSelectedFilter> = [];
  hasChange: boolean = false;

  onClearFilters() {
    this.hasChange = true;
    this.actives = [];
    this.applyNow();
  }

  onAddFilter(filter: TotsItemFilter) {
    this.hasChange = true;
    this.actives.push({ filter: filter, conditional: 0 });
    this.addFilterButton.closeMenu();
  }

  onRemoveFilter(index: number) {
    this.hasChange = true;
    this.actives.splice(index, 1);
    this.applyNow();
  }

  onChange() {
    this.hasChange = true;
    this.applyNow();
  }

  private applyNow() {
    this.apply.emit(this.actives);
  }
}
