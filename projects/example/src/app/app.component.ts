import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MultiUsersFilterComponent, StringFilterComponent, TotsFilterBoxConfig } from 'projects/tots/filter-box/src/public-api';
import { UserService } from './services/user.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { SearchMenuComponent } from 'projects/tots/filter-menu/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  @ViewChild('searchMenuMultiple') searchMenuMultiple!: SearchMenuComponent;
  @ViewChild('searchMenu') searchMenu!: SearchMenuComponent;

  @ViewChild('searchMenuMultipleButton') searchMenuMultipleButton!: MatMenuTrigger;
  @ViewChild('searchMenuButton') searchMenuButton!: MatMenuTrigger;

  config?: TotsFilterBoxConfig;

  constructor(
    protected userService: UserService
  ){}

  ngOnInit(): void {
    this.loadConfig();
    
  }

  onSelectedOptionInMenu(item: any) {
    console.log(item);

    this.searchMenuButton.closeMenu();
    this.searchMenu.clearInput();
  }

  ngAfterViewInit(): void {
    this.loadSearchMenu();
  }

  loadSearchMenu() {
    let options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];

    this.searchMenu.loadItems(options);
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
    ];
  }
}
