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

/** Tots Libraries */
import { TotsUsersSelectorMenuModule } from '@tots/users-selector-menu';
import { TotsFilterMenuModule } from '@tots/filter-menu';

/** Components */
import { TotsFilterBoxComponent } from './components/tots-filter-box/tots-filter-box.component';
import { PrintFilterComponent } from './filters/print-filter/print-filter.component';
import { TitleFilterViewComponent } from './components/title-filter-view/title-filter-view.component';
import { ConditionalFilterViewComponent } from './components/conditional-filter-view/conditional-filter-view.component';

/** Filters */
import { StringFilterComponent } from './filters/string-filter/string-filter.component';
import { MultiUsersFilterComponent } from './filters/multi-users-filter/multi-users-filter.component';
import { MultiSelectFilterComponent } from './filters/multi-select-filter/multi-select-filter.component';
import { BetweenNumberFilterComponent } from './filters/between-number-filter/between-number-filter.component';
import { MultiSelectObsFilterComponent } from './filters/multi-select-obs-filter/multi-select-obs-filter.component';




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
    MultiSelectFilterComponent,
    BetweenNumberFilterComponent,
    MultiSelectObsFilterComponent,
  ],
  imports: [
    /** Angular */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    /** Tots Libraries */
    TotsUsersSelectorMenuModule,
    TotsFilterMenuModule,

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
    MultiSelectFilterComponent,
    BetweenNumberFilterComponent,
    MultiSelectObsFilterComponent
  ]
})
export class TotsFilterBoxModule { }
