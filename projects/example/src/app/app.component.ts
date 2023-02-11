import { Component, OnInit } from '@angular/core';
import { MultiUsersFilterComponent, StringFilterComponent, TotsFilterBoxConfig } from 'projects/tots/filter-box/src/public-api';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
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
    this.config.isOnlyIconButton = true;
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
