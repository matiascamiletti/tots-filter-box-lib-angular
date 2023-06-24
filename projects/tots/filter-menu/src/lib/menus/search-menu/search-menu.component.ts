import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TotsSearchMenuConfig } from '../../entities/tots-search-menu-config';

@Component({
  selector: 'tots-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss']
})
export class SearchMenuComponent implements OnInit, AfterViewInit {

  @Input() config!: TotsSearchMenuConfig;

  @Output() selected = new EventEmitter<any>();
  @Output() search = new EventEmitter<any>();

  input = new FormControl<string>('');

  filteredOptions: Array<any> = [];

  constructor(
    protected changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadConfigInput();
  }

  ngAfterViewInit(): void {
    this.loadItems(this.config.options);
  }

  onSelectOption(option: any) {
    if(!this.config.allowMultiple){
      return this.selected.emit(option);
    }

    this.config.selecteds.push(option);
    this.loadItems(this.config.options);

    this.selected.emit(this.config.selecteds);
  }

  onClickRemoveSelected(option: any) {
    this.config.selecteds = this.config.selecteds.filter(item => item[this.config.keyIdentifier] != option[this.config.keyIdentifier]);
    this.loadItems(this.config.options);
    this.selected.emit(this.config.selecteds);
  }

  loadItems(list: Array<any>) {
    this.config.options = list;
    // Filter hide selecteds by id params
    this.filteredOptions = list.filter(option => !this.isIncludeOptionInSelecteds(option));
    this.changeDetectorRef.detectChanges();
  }

  loadItemsByObs(obs: Observable<Array<any>>) {
    obs.subscribe(items => this.loadItems(items));
  }

  loadConfigInput() {
    this.input.valueChanges.subscribe(value => {
      if(this.config.isNeedService){
        this.search.emit(value);
        return;
      }

      if(value == ''||value == null||value == undefined){
        this.loadItems(this.config.options);
      } else {
        this.filteredOptions = this.config.options.filter(option => !this.isIncludeOptionInSelecteds(option)).filter(option => option[this.config.keySearch].toLowerCase().includes(value.toLowerCase()));
      }
    });
  }

  setSelecteds(selecteds: Array<any>) {
    this.config.selecteds = selecteds;
  }

  clearInput() {
    this.input.setValue('');
  }

  isIncludeOptionInSelecteds(option: any): boolean {
    if(this.config.selecteds.length == 0){
      return false;
    }

    let item = this.config.selecteds.find(item => item[this.config.keyIdentifier] == option[this.config.keyIdentifier]);
    if(item == null || item == undefined){
      return false;
    }

    return true;
  }
}
