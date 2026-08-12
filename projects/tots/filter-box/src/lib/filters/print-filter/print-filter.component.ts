import { Component, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { TotsItemSelectedFilter } from '../../entities/tots-item-filter';

@Component({
  selector: 'tots-print-filter',
  templateUrl: './print-filter.component.html',
  styleUrls: ['./print-filter.component.css']
})
export class PrintFilterComponent {

  @Input() item!: TotsItemSelectedFilter;
  @Output() change = new EventEmitter<boolean>();

  constructor(
    protected viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const view = this.viewContainerRef.createComponent(this.item.filter.component);
    (<any>view.instance).item = this.item;

    const innerChange = (<any>view.instance).change;
    if (innerChange) {
      innerChange.subscribe(() => this.change.emit(true));
    }
  }
}
