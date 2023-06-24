import { Component, OnInit, ViewChild } from '@angular/core';
import { MultiUsersFilterComponent, StringFilterComponent, TotsFilterBoxConfig } from 'projects/tots/filter-box/src/public-api';
import { UserService } from './services/user.service';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  @ViewChild('searchMenu', { read: MatMenuTrigger }) searchMenu!: MatMenuTrigger;

  config?: TotsFilterBoxConfig;

  constructor(
    protected userService: UserService
  ){}

  ngOnInit(): void {
    this.loadConfig();
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
