import { Component } from '@angular/core';
import { TotsFilterBaseComponent } from '../tots-filter-base.component';
import { TotsSearchMenuConfig } from '@tots/filter-menu';

@Component({
  selector: 'tots-multi-select-filter',
  templateUrl: './multi-select-filter.component.html',
  styleUrls: ['./multi-select-filter.component.css']
})
export class MultiSelectFilterComponent extends TotsFilterBaseComponent {

  configSearchMenu?: TotsSearchMenuConfig;

  selected?: any;

  override ngOnInit(): void {
    super.ngOnInit();
    this.loadSearchMenuConfig();
  }

  onSelectedOptionInMenu(item: any) {
    this.selected = item;
  }

  loadSearchMenuConfig() {
    this.configSearchMenu = new TotsSearchMenuConfig();
    this.configSearchMenu.allowMultiple = this.item.filter.extra.allowMultiple ?? true;
    this.configSearchMenu.isNeedService = false;
    this.configSearchMenu.options = this.item.filter.extra.options;
  }

  printSelected() {
    if(this.selected == undefined){
      return 'None';
    }

    if(this.selected instanceof Array && this.selected.length == 0){
      return 'None';
    }

    this.item.value = this.selected;

    if(!this.configSearchMenu?.allowMultiple){
      return this.selected[this.configSearchMenu!.keyPrint];
    }
    
    return this.selected.map((item: any) => item[this.configSearchMenu!.keyPrint]).join(', ');
  }
}
