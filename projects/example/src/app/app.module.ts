import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TotsCoreModule } from '@tots/core';
import { HttpClientModule } from '@angular/common/http';
import { TotsFilterMenuModule } from 'projects/tots/filter-menu/src/public-api';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { TotsDateRangeFilterBoxModule } from 'projects/tots/date-range-filter-box/src/public-api';

// Providers
import { TOTS_FILTER_BOX_DEFAULT_CONFIG, TotsFilterBoxModule } from 'projects/tots/filter-box/src/public-api';
import { totsFilterBoxDefaultConfig } from './helpers/tots-filter-box-default-config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatButtonModule,
    MatMenuModule,

    TotsCoreModule,
    TotsFilterBoxModule,
    TotsFilterMenuModule,
    TotsDateRangeFilterBoxModule
  ],
  providers: [
    {
      provide: TOTS_FILTER_BOX_DEFAULT_CONFIG,
      useValue: totsFilterBoxDefaultConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
