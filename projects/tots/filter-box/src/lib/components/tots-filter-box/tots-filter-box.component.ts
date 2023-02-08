import { Component, Input } from '@angular/core';
import { TotsFilterBoxConfig } from '../../entities/tots-filter-box-config';

@Component({
  selector: 'tots-filter-box',
  templateUrl: './tots-filter-box.component.html',
  styleUrls: ['./tots-filter-box.component.css']
})
export class TotsFilterBoxComponent {

  @Input() config!: TotsFilterBoxConfig;

  actives: Array<any> = [];
  hasChange: boolean = false;

  onApplyFilters() {
    
  }

  onClearFilters() {
    this.hasChange = true;
    this.actives = [];
    this.onApplyFilters();
  }
}
