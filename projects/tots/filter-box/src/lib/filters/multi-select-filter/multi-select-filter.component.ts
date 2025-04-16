import { Component, OnInit } from '@angular/core';
import { TotsFilterBaseComponent } from '../tots-filter-base.component';
import { TotsSearchMenuConfig } from '@tots/filter-menu';

@Component({
  selector: 'tots-multi-select-filter',
  templateUrl: './multi-select-filter.component.html',
  styleUrls: ['./multi-select-filter.component.css']
})
export class MultiSelectFilterComponent extends TotsFilterBaseComponent implements OnInit {

  configSearchMenu?: TotsSearchMenuConfig;
  selected?: any;

  override ngOnInit(): void {
    this.loadSearchMenuConfig();
    this.initializeSelection();
  }

  private initializeSelection() {
    if (this.item.value) {
      this.selected = this.item.value;
      this.configSearchMenu!.selecteds = [...this.item.value];
    }
  }

  onSelectedOptionInMenu(item: any) {
    this.selected = item;
    this.item.value = this.selected;
    this.onChange();
  }

  loadSearchMenuConfig() {
    this.configSearchMenu = new TotsSearchMenuConfig();
    this.configSearchMenu.allowMultiple = this.item.filter.extra?.allowMultiple ?? true;
    this.configSearchMenu.isNeedService = false;
    this.configSearchMenu.options = this.item.filter.extra?.options || [];
  }

  printSelected() {
    if (!this.selected) {
      return 'None';
    }

    if (Array.isArray(this.selected) && this.selected.length === 0) {
      return 'None';
    }

    if (!this.configSearchMenu?.allowMultiple) {
      return this.selected[this.configSearchMenu!.keyPrint];
    }
    
    return this.selected.map((item: any) => item[this.configSearchMenu!.keyPrint]).join(', ');
  }
}
