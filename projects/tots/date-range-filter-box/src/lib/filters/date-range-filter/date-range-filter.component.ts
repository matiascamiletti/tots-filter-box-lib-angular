import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { TotsFilterBaseComponent } from '@tots/filter-box';
import * as moment from 'moment';

@Component({
  selector: 'tots-date-range-filter',
  templateUrl: './date-range-filter.component.html',
  styleUrls: ['./date-range-filter.component.scss']
})
export class TotsDateRangeFilterComponent extends TotsFilterBaseComponent implements OnInit {
  range = new UntypedFormGroup({
    start: new UntypedFormControl(),
    end: new UntypedFormControl()
  });

  override ngOnInit(): void {
    this.initializeRange();
    this.loadInput();
  }

  private initializeRange() {
    if (this.item.value) {
      this.range.patchValue({
        start: this.item.value.min?.toDate(),
        end: this.item.value.max?.toDate()
      }, { emitEvent: false });
    }
  }

  /*getItemValue(): any {
      return TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
  }*/

  override loadInput() {
    this.range.valueChanges.subscribe(val => {
      if (val.start && val.end) {
        this.item.value = {
          min: moment(val.start).startOf('day'),
          max: moment(val.end).endOf('day')
        };
        this.onChange();
      }
    });
  }
}
