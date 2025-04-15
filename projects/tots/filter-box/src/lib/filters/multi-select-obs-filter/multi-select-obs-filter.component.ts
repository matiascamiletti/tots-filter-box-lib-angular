import { Component, ViewChild } from '@angular/core';
import { TotsFilterBaseComponent } from '../tots-filter-base.component';
import { SearchMenuComponent, TotsSearchMenuConfig } from '@tots/filter-menu';

@Component({
  selector: 'lib-multi-select-obs-filter',
  templateUrl: './multi-select-obs-filter.component.html',
  styleUrls: ['./multi-select-obs-filter.component.css']
})
export class MultiSelectObsFilterComponent extends TotsFilterBaseComponent {
  @ViewChild('searchMenu') searchMenu!: SearchMenuComponent;

  configSearchMenu?: TotsSearchMenuConfig;

  selected?: any;

  override ngOnInit(): void {
    super.ngOnInit();
    this.loadSearchMenuConfig();
    this.initializeSelection();
  }

  private initializeSelection() {
    if (this.item.value) {
      this.selected = this.item.value;
      if (this.configSearchMenu) {
        this.configSearchMenu.selecteds = Array.isArray(this.item.value) ? [...this.item.value] : [this.item.value];
      }
    }
  }

  onSelectedOptionInMenu(item: any) {
    this.selected = item;
    this.item.value = this.selected;
    this.onChange();
  }

  onSearch(text: string) {
    this.searchMenu.loadItemsByObs(this.item.filter.extra.obs(text));
  }

  loadSearchMenuConfig() {
    this.configSearchMenu = new TotsSearchMenuConfig();
    this.configSearchMenu.allowMultiple = this.item.filter.extra.allowMultiple ?? true;
    this.configSearchMenu.isNeedService = true;
  }

  printSelected() {
    if(this.selected == undefined || (Array.isArray(this.selected) && this.selected.length === 0)){
      return 'None';
    }

    if(!this.configSearchMenu?.allowMultiple){
      return this.selected[this.configSearchMenu!.keyPrint];
    }
    
    return this.selected.map((item: any) => item[this.configSearchMenu!.keyPrint]).join(', ');
  }

  override initializePresetValue() {
    this.initializeSelection();
  }
}
