import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'tots-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss']
})
export class SearchMenuComponent implements OnInit {

  @Input() allowMultiple = false;

  @Output() selected = new EventEmitter<any>();

  input = new FormControl<string>('');

  options: Array<any> = [];
  filteredOptions: Array<any> = [];

  constructor(
    protected changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadConfigInput();
  }

  onSelectOption(option: any) {
    if(!this.allowMultiple){
      return this.selected.emit(option);
    }
  }

  loadItems(list: Array<any>) {
    this.options = list;
    this.filteredOptions = list;
    this.changeDetectorRef.detectChanges();
  }

  loadItemsByObs(obs: Observable<Array<any>>) {
    obs.subscribe(items => this.loadItems(items));
  }

  loadConfigInput() {
    this.input.valueChanges.subscribe(value => {
      if(value == ''||value == null||value == undefined){
        this.filteredOptions = this.options;
      } else {
        this.filteredOptions = this.options.filter(option => option.label.toLowerCase().includes(value.toLowerCase()));
      }
    });
  }

  clearInput() {
    this.input.setValue('');
  }
}
