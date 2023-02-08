/** Angular */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/** Angular Material */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';

/** Components */
import { TotsFilterBoxComponent } from './components/tots-filter-box/tots-filter-box.component';
import { StringFilterComponent } from './filters/string-filter/string-filter.component';
import { PrintFilterComponent } from './filters/print-filter/print-filter.component';



@NgModule({
  declarations: [
    
    /** Components */
    TotsFilterBoxComponent,
         StringFilterComponent,
         PrintFilterComponent
  ],
  imports: [
    /** Angular */
    CommonModule,

    /** Angular Material */
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
  ],
  exports: [
    /** Components */
    TotsFilterBoxComponent
  ]
})
export class TotsFilterBoxModule { }
