/** Angular */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Angular Material */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

/** Components */
import { TotsFilterBoxComponent } from './components/tots-filter-box/tots-filter-box.component';
import { PrintFilterComponent } from './filters/print-filter/print-filter.component';
import { TitleFilterViewComponent } from './components/title-filter-view/title-filter-view.component';
import { ConditionalFilterViewComponent } from './components/conditional-filter-view/conditional-filter-view.component';

/** Filters */
import { StringFilterComponent } from './filters/string-filter/string-filter.component';
import { MultiUsersFilterComponent } from './filters/multi-users-filter/multi-users-filter.component';



@NgModule({
  declarations: [
    
    /** Components */
    TotsFilterBoxComponent,
    PrintFilterComponent,
    TitleFilterViewComponent,
    ConditionalFilterViewComponent,

    /** Filters */
    StringFilterComponent,
    MultiUsersFilterComponent,
  ],
  imports: [
    /** Angular */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    /** Angular Material */
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    /** Components */
    TotsFilterBoxComponent,
    TitleFilterViewComponent,
    ConditionalFilterViewComponent,

    /** Filters */
    StringFilterComponent,
    MultiUsersFilterComponent,
  ]
})
export class TotsFilterBoxModule { }
