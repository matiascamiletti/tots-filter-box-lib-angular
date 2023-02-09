import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TotsItemSelectedFilter } from '../../entities/tots-item-filter';

@Component({
  selector: 'tots-conditional-filter-view',
  templateUrl: './conditional-filter-view.component.html',
  styleUrls: ['./conditional-filter-view.component.css']
})
export class ConditionalFilterViewComponent {
  @Input() item!: TotsItemSelectedFilter;
  @Output() change = new EventEmitter<boolean>();

  onChange() {
    this.change.emit(true);
  }
}
