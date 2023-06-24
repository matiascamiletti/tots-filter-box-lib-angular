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

  override ngOnInit(): void {
    super.ngOnInit();
    this.loadSearchMenuConfig();
  }

  onSelectedOptionInMenu(item: any) {
    console.log(item);

    //this.searchMenuButton.closeMenu();
    //this.searchMenu.clearInput();
  }

  loadSearchMenuConfig() {
    this.configSearchMenu = new TotsSearchMenuConfig();
    this.configSearchMenu.allowMultiple = false;
    this.configSearchMenu.isNeedService = false;
    this.configSearchMenu.options = [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' },
    ];
  }
}
