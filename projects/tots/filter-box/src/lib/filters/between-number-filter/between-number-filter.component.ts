import { Component } from '@angular/core';
import { TotsFilterBaseComponent } from '../tots-filter-base.component';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'lib-between-number-filter',
  templateUrl: './between-number-filter.component.html',
  styleUrls: ['./between-number-filter.component.css']
})
export class BetweenNumberFilterComponent extends TotsFilterBaseComponent {

  inputMax = new UntypedFormControl();

  override loadInput() {
    if(this.item.value == undefined){
      this.item.value = { min: undefined, max: undefined };
    }

    this.input.valueChanges.subscribe(val => {
        this.item.value.min = val;
    });
    this.inputMax.valueChanges.subscribe(val => {
        this.item.value.max = val;
    });
  }
}
