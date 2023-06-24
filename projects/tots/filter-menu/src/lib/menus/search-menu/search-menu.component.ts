import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tots-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss']
})
export class SearchMenuComponent {
  input = new FormControl<string>('');
}
