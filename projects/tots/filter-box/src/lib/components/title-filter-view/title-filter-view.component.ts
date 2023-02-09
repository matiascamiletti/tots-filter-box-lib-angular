import { Component, Input } from '@angular/core';
import { TotsItemSelectedFilter } from '../../entities/tots-item-filter';

@Component({
  selector: 'tots-title-filter-view',
  templateUrl: './title-filter-view.component.html',
  styleUrls: ['./title-filter-view.component.css']
})
export class TitleFilterViewComponent {
  @Input() item!: TotsItemSelectedFilter;
}
