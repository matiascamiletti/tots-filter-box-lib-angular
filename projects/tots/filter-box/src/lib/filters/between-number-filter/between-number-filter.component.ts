import { Component, OnInit } from '@angular/core';
import { TotsFilterBaseComponent } from '../tots-filter-base.component';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'lib-between-number-filter',
  templateUrl: './between-number-filter.component.html',
  styleUrls: ['./between-number-filter.component.css']
})
export class BetweenNumberFilterComponent extends TotsFilterBaseComponent implements OnInit {

  inputMax = new UntypedFormControl();

  override ngOnInit(): void {
    if (this.item.value === undefined) {
      this.item.value = { min: null, max: null };
    }
    this.initializeControls();
    this.loadInput();
  }

  private initializeControls() {
    if (this.item.value.min !== undefined) {
      this.input.setValue(this.item.value.min, { emitEvent: false });
    }
    if (this.item.value.max !== undefined) {
      this.inputMax.setValue(this.item.value.max, { emitEvent: false });
    }
  }

  override loadInput() {
    this.input.valueChanges.subscribe(val => {
      this.item.value.min = val;
      this.onChange();
    });
    
    this.inputMax.valueChanges.subscribe(val => {
      this.item.value.max = val;
      this.onChange();
    });
  }
}
