import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Angular Material */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/** Menus */
import { SearchMenuComponent } from './menus/search-menu/search-menu.component';








@NgModule({
  declarations: [
    
    /** Menus */
    SearchMenuComponent
  ],
  imports: [
    /** Angular */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    /** Angular Material */
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    /** Menus */
    SearchMenuComponent
  ]
})
export class TotsFilterMenuModule { }
