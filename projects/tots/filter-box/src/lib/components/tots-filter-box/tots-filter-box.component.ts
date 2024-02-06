import { Component, EventEmitter, Inject, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { TotsFilterBoxConfig } from '../../entities/tots-filter-box-config';
import { TotsItemFilter, TotsItemSelectedFilter } from '../../entities/tots-item-filter';
import { TOTS_FILTER_BOX_DEFAULT_CONFIG, TotsFilterBoxDefaultConfig } from '../../entities/tots-filter-box-default-config';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'tots-filter-box',
  templateUrl: './tots-filter-box.component.html',
  styleUrls: ['./tots-filter-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TotsFilterBoxComponent {

  @ViewChild('addFilterButton') addFilterButton!: MatMenuTrigger;

  @Input() config!: TotsFilterBoxConfig;

  @Output() apply = new EventEmitter<Array<TotsItemSelectedFilter>>();

  actives: Array<TotsItemSelectedFilter> = [];
  hasChange: boolean = false;

  constructor(
    @Inject(TOTS_FILTER_BOX_DEFAULT_CONFIG) protected defaultConfig: TotsFilterBoxDefaultConfig,
  ) {
  }

  protected get icon() : string|undefined {
    return this.config.buttonIcon || this.defaultConfig.buttonIcon;
  }
  protected get matButtonDirective() : string {
    return this.config.matButtonDirective || this.defaultConfig.matButtonMaterialDirective!;
  }
  protected get matButtonColor() : ThemePalette {
    return this.config.matButtonColor || this.defaultConfig.matButtonColor;
  }
  protected get addFilterButtonCaption() : string {
    return this.config.textAddButton || this.defaultConfig.addButtonCaption!;
  }
  protected get clearButtonCaption() : string {
    return this.config.textClearButton || this.defaultConfig.clearButtonCaption!;
  }
  protected get buttonCaption() : string {
    return this.config.textButton || this.defaultConfig.buttonCaption!;
  }
  protected get menuButtonsColor() : ThemePalette {
    return this.config.menuButtonsColor || this.defaultConfig.menuButtonsColor;
  }

  onApplyFilters() {
    this.apply.emit(this.actives);
  }

  onClearFilters() {
    this.hasChange = true;
    this.actives = [];
    this.onApplyFilters();
  }

  onAddFilter(filter: TotsItemFilter) {
    this.hasChange = true;
    this.actives.push({ filter: filter, conditional: 0 });
    this.addFilterButton.closeMenu();
  }

  onRemoveFilter(index: number) {
    this.hasChange = true;
    this.actives.splice(index, 1);
    this.onApplyFilters();
  }

  onChange() {
    this.hasChange = true;
  }
}
