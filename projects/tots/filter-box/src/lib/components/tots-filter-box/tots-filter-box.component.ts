import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { TotsFilterBoxConfig } from '../../entities/tots-filter-box-config';
import {
  TotsItemFilter,
  TotsItemSelectedFilter,
} from '../../entities/tots-item-filter';
import {
  TOTS_FILTER_BOX_DEFAULT_CONFIG,
  TotsFilterBoxDefaultConfig,
} from '../../entities/tots-filter-box-default-config';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'tots-filter-box',
  templateUrl: './tots-filter-box.component.html',
  styleUrls: ['./tots-filter-box.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TotsFilterBoxComponent implements OnInit {
  @ViewChild('addFilterButton') addFilterButton!: MatMenuTrigger;
  @ViewChild('filterMainButton') filterMainButton!: MatMenuTrigger;

  @Input() config!: TotsFilterBoxConfig;

  @Output() apply = new EventEmitter<Array<TotsItemSelectedFilter>>();

  actives: Array<TotsItemSelectedFilter> = [];
  appliedFilters: TotsItemSelectedFilter[] = [];
  hasChange: boolean = false;

  constructor(
    @Inject(TOTS_FILTER_BOX_DEFAULT_CONFIG)
    protected defaultConfig: TotsFilterBoxDefaultConfig
  ) {}

  ngOnInit() {
    this.initializePresetFilters();
  }

  /**
   * Applies a set of filters dynamically
   * @param filters Array of filters with their values
   * @example
   * applyFilters([
   *   { title: 'Status', value: ['1', '2'] },
   *   { title: 'Price', value: { min: 100, max: 1000 } }
   * ]);
   */
  public applyFilters(filters: Array<{ title: string, value: any }>) {
    // Clear current active filters
    this.actives = [];
    this.appliedFilters = [];

    // Apply each filter
    filters.forEach(filterToApply => {
      const configFilter = this.config.filters.find(f => f.title === filterToApply.title);
      if (configFilter) {
        // Update value in configuration
        configFilter.value = filterToApply.value;
        
        // Create active filter
        const selectedFilter: TotsItemSelectedFilter = {
          filter: { ...configFilter }, // Clone filter to avoid references
          conditional: 0,
          value: filterToApply.value
        };

        // Add to active filters
        this.actives.push(selectedFilter);
        this.appliedFilters.push(selectedFilter);
      }
    });

    // Emit apply filters event
    this.apply.emit(this.actives);
  }

  private initializePresetFilters() {
    if (this.config && this.config.filters) {
      const presetsFilters = this.config.filters.filter(filter => filter.value !== undefined);
      presetsFilters.forEach(filter => {
        if (!this.filterAlreadyApplied(filter)) {
          const selectedFilter: TotsItemSelectedFilter = { 
            filter: { ...filter }, // Clonamos el filtro para evitar referencias
            conditional: 0,
            value: filter.value 
          };
          this.actives.push(selectedFilter);
          this.appliedFilters.push(selectedFilter);
        }
      });
    }
  }

  protected get icon(): string | undefined {
    return this.config.buttonIcon || this.defaultConfig.buttonIcon;
  }
  protected get matButtonDirective(): string {
    return (
      this.config.matButtonDirective ||
      this.defaultConfig.matButtonMaterialDirective!
    );
  }
  protected get matButtonColor(): ThemePalette {
    return this.config.matButtonColor || this.defaultConfig.matButtonColor;
  }
  protected get addFilterButtonCaption(): string {
    return this.config.textAddButton || this.defaultConfig.addButtonCaption!;
  }
  protected get applyFiltersButtonCaption(): string {
    return (
      this.config.textApplyFilters ||
      this.defaultConfig.applyFiltersButtonCaption!
    );
  }
  protected get clearButtonCaption(): string {
    return (
      this.config.textClearButton || this.defaultConfig.clearButtonCaption!
    );
  }
  protected get buttonCaption(): string {
    return this.config.textButton || this.defaultConfig.buttonCaption!;
  }
  protected get menuButtonsColor(): ThemePalette {
    return this.config.menuButtonsColor || this.defaultConfig.menuButtonsColor;
  }

  onApplyFilters() {
    this.apply.emit(this.actives);
    this.appliedFilters = this.getValidFilters(this.actives);
    this.filterMainButton.closeMenu();
  }

  private getValidFilters(filters: TotsItemSelectedFilter[]): TotsItemSelectedFilter[] {
    return filters.filter(filter => {
      if (filter.value === undefined || filter.value === null) return false;
      return Object.values(filter.value).some(val => val !== undefined && val !== null);
    });
  }

  onClearFilters() {
    this.hasChange = true;
    this.actives = [];
    this.appliedFilters = [...this.actives];
    this.onApplyFilters();
  }

  onAddFilter(filter: TotsItemFilter): void {
    if (!this.filterAlreadyApplied(filter)) {
      this.hasChange = true;
      const selectedFilter: TotsItemSelectedFilter = {
        filter: { ...filter }, // Clonamos el filtro para evitar referencias
        conditional: 0,
        value: filter.value
      };
      this.actives.push(selectedFilter);
      this.addFilterButton.closeMenu();
    }
  }

  filterAlreadyApplied(filter: TotsItemFilter) {
    return this.actives.some(active => active.filter.title === filter.title);
  }

  onRemoveFilter(index: number) {
    this.hasChange = true;
    this.actives.splice(index, 1);
  }

  onChange() {
    this.hasChange = true;
  }

  reset(): void {
    if (!this.appliedFilters.length) {
      this.hasChange = false;
      this.actives = [];
    }

    this.actives = [...this.appliedFilters];
  }
}
