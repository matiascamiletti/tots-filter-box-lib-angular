import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { TotsFilterBaseComponent } from '@tots/filter-box';

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
    this.loadInput();
  }

  /*getItemValue(): any {
      return TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
  }*/

  override loadInput() {
      this.range.valueChanges.subscribe(val => {
          this.item.value = val;
      });
  }
}
