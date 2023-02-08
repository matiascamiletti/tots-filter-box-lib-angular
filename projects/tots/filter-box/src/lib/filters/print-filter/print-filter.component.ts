import { Component, Input, ViewContainerRef } from '@angular/core';
import { TotsItemSelectedFilter } from '../../entities/tots-item-filter';

@Component({
  selector: 'tots-print-filter',
  templateUrl: './print-filter.component.html',
  styleUrls: ['./print-filter.component.css']
})
export class PrintFilterComponent {

  @Input() item!: TotsItemSelectedFilter;

  constructor(
    protected viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const view = this.viewContainerRef.createComponent(this.item.filter.component);
    (<any>view.instance).item = this.item;
  }
}
