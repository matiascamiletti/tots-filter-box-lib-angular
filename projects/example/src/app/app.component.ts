import { Component, OnInit } from '@angular/core';
import { StringFilterComponent, TotsFilterBoxConfig } from 'projects/tots/filter-box/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  config?: TotsFilterBoxConfig;

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    this.config = new TotsFilterBoxConfig();
    this.config.textButton = 'Filters';
    this.config.textAddButton = '+ Add Filter';
    this.config.textClearButton = 'Clear Filters';

    this.config.filters = [
      { title: 'Title', component: StringFilterComponent }
    ];
  }
}
