import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MultiSelectFilterComponent, MultiUsersFilterComponent, StringFilterComponent, TotsFilterBoxConfig } from 'projects/tots/filter-box/src/public-api';
import { UserService } from './services/user.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { SearchMenuComponent, TotsSearchMenuConfig } from 'projects/tots/filter-menu/src/public-api';
import { TotsDateRangeFilterComponent } from 'projects/tots/date-range-filter-box/src/public-api';
import { BetweenNumberFilterComponent } from 'projects/tots/filter-box/src/lib/filters/between-number-filter/between-number-filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  @ViewChild('searchMenuMultiple') searchMenuMultiple!: SearchMenuComponent;
  @ViewChild('searchMenu') searchMenu!: SearchMenuComponent;

  @ViewChild('searchMenuMultipleButton') searchMenuMultipleButton!: MatMenuTrigger;
  @ViewChild('searchMenuButton') searchMenuButton!: MatMenuTrigger;
  
  configSearchMenu?: TotsSearchMenuConfig;
  configSearchMultipleMenu?: TotsSearchMenuConfig;

  config?: TotsFilterBoxConfig;

  constructor(
    protected userService: UserService
  ){}

  ngOnInit(): void {
    this.loadConfig();
    this.loadSearchMenu();
    this.loadSearchMultipleMenu();
  }

  onApplyFilters(filters: any) {
    console.log(filters);
  }

  onSelectedOptionInMenu(item: any) {
    console.log(item);

    this.searchMenuButton.closeMenu();
    this.searchMenu.clearInput();
  }

  onSelectedOptionsInMenu(items: any) {
    console.log(items);

    this.searchMenuMultiple.clearInput();
  }

  loadSearchMenu() {
    this.configSearchMenu = new TotsSearchMenuConfig();
    this.configSearchMenu.allowMultiple = false;
    this.configSearchMenu.isNeedService = false;
    this.configSearchMenu.options = [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' },
    ];
  }

  loadSearchMultipleMenu() {
    this.configSearchMultipleMenu = new TotsSearchMenuConfig();
    this.configSearchMultipleMenu.allowMultiple = true;
    this.configSearchMultipleMenu.isNeedService = false;
    this.configSearchMultipleMenu.options = [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' },
    ];
    this.configSearchMultipleMenu.selecteds = [
      { id: '2', label: 'Option 2' },
    ];
  }

  loadConfig() {
    this.config = new TotsFilterBoxConfig();
    this.config.textButton = 'Filters';
    this.config.isOnlyIconButton = false;
    this.config.textAddButton = '+ Add Filter';
    this.config.textClearButton = 'Clear Filters';

    this.config.filters = [
      { title: 'Title', component: StringFilterComponent },
      { title: 'Created By', component: MultiUsersFilterComponent, extra: {
        service: this.userService,
        searchFields: ['firstname', 'lastname'],
        identifierField: 'id',
        firstnameField: 'firstname',
        lastnameField: 'lastname',
        photoField: 'photo',
        textButton: 'Select user',
        prependIcon: 'person',
       } },
       { title: 'Status', component: MultiSelectFilterComponent, extra: {
        allowMultiple: true,
        options: [
          { id: '1', label: 'Pending' },
          { id: '2', label: 'In Progress' },
          { id: '3', label: 'Completed' },
        ]
       } },
       { title: 'Updated At', component: TotsDateRangeFilterComponent },
       { title: 'Price', component: BetweenNumberFilterComponent },
    ];
  }
}
