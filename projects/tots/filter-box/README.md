# @tots/filter-box

A flexible and customizable filter box component for Angular applications.

## Features

- Dynamic filter management
- Material Design integration
- Customizable button styles and colors
- Support for multiple filter types
- Preset filter values
- Clear and apply filter actions
- Responsive design

## Installation

```bash
npm install @tots/filter-box
```

## Usage

### Basic Implementation

```typescript
import { TotsFilterBoxComponent, TotsFilterBoxConfig } from '@tots/filter-box';

@Component({
  selector: 'app-my-component',
  template: `
    <tots-filter-box
      [config]="filterConfig"
      (apply)="onApplyFilters($event)">
    </tots-filter-box>
  `
})
export class MyComponent {
  filterConfig: TotsFilterBoxConfig = {
    filters: [
      {
        title: 'Status',
        type: 'select',
        options: [
          { value: '1', title: 'Active' },
          { value: '2', title: 'Inactive' }
        ]
      },
      {
        title: 'Price Range',
        type: 'range',
        value: { min: 0, max: 1000 }
      }
    ]
  };

  onApplyFilters(filters: TotsItemSelectedFilter[]) {
    console.log('Applied filters:', filters);
  }
}
```

### Advanced Implementation

Here's a more comprehensive example showing various filter types and configurations:

```typescript
import { Component, ViewChild } from '@angular/core';
import { TotsFilterBoxComponent, TotsFilterBoxConfig } from '@tots/filter-box';
import { StringFilterComponent } from '@tots/filter-box';
import { MultiUsersFilterComponent } from '@tots/filter-box';
import { MultiSelectFilterComponent } from '@tots/filter-box';
import { TotsDateRangeFilterComponent } from '@tots/date-range-filter-box';
import { BetweenNumberFilterComponent } from '@tots/filter-box';
import { MultiSelectObsFilterComponent } from '@tots/filter-box';
import { Observable, of } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  template: `
    <tots-filter-box
      #filterBox
      [config]="config"
      (apply)="onApplyFilters($event)">
    </tots-filter-box>
    
    <button (click)="applyDefaultFilters()">Apply Default Filters</button>
  `
})
export class AppComponent {
  @ViewChild('filterBox') filterBox!: TotsFilterBoxComponent;
  
  config?: TotsFilterBoxConfig;
  
  // Example of saved filters
  readonly SAVED_FILTERS = [
    { 
      title: 'Title',
      value: 'Saved Title'
    },
    {
      title: 'Status',
      value: [
        { id: '2', label: 'In Progress' },
        { id: '3', label: 'Completed' }
      ]
    },
    {
      title: 'Price',
      value: {
        min: 500,
        max: 2000
      }
    },
    {
      title: 'Customer',
      value: [
        { id: '2', label: 'Customer 2' },
        { id: '3', label: 'Customer 3' }
      ]
    },
    {
      title: 'Updated At',
      value: {
        min: moment('2024-01-01').startOf('day'),
        max: moment('2024-03-20').startOf('day')
      }
    }
  ];

  ngOnInit(): void {
    this.loadConfig();
  }

  onApplyFilters(filters: any) {
    console.log('Applied filters:', filters);
  }

  // Method to apply predefined filters
  applyDefaultFilters() {
    this.filterBox.applyFilters(this.SAVED_FILTERS);
  }

  loadConfig() {
    this.config = new TotsFilterBoxConfig();
    this.config.isOnlyIconButton = false;

    this.config.filters = [
      { title: 'Title', component: StringFilterComponent },
      { 
        title: 'Created By', 
        component: MultiUsersFilterComponent, 
        extra: {
          service: this.userService,
          searchFields: ['firstname', 'lastname'],
          identifierField: 'id',
          firstnameField: 'firstname',
          lastnameField: 'lastname',
          photoField: 'photo',
          textButton: 'Select user',
          prependIcon: 'person',
        } 
      },
      { 
        title: 'Status', 
        component: MultiSelectFilterComponent, 
        extra: {
          allowMultiple: true,
          options: [
            { id: '1', label: 'Pending' },
            { id: '2', label: 'In Progress' },
            { id: '3', label: 'Completed' },
          ]
        } 
      },
      { title: 'Updated At', component: TotsDateRangeFilterComponent },
      { title: 'Price', component: BetweenNumberFilterComponent },
      { 
        title: 'Customer', 
        component: MultiSelectObsFilterComponent, 
        extra: {
          allowMultiple: true,
          obs: this.searchAutocompleteTest.bind(this)
        } 
      },
    ];
  }

  searchAutocompleteTest(query?: string): Observable<Array<any>> {
    let customers = [
      { id: '1', label: 'Customer 1' },
      { id: '2', label: 'Customer 2' },
      { id: '3', label: 'Customer 3' },
      { id: '4', label: 'Customer 4' },
      { id: '5', label: 'Customer 5' },
      { id: '6', label: 'Customer 6' },
    ];

    return of(customers.filter(c => c.label.toLowerCase().includes(query!.toLowerCase())));
  }
}
```

### Preset Filter Values

You can set default values for filters that will be automatically applied when the component initializes:

```typescript
filterConfig: TotsFilterBoxConfig = {
  filters: [
    {
      title: 'Status',
      type: 'select',
      options: [
        { value: '1', title: 'Active' },
        { value: '2', title: 'Inactive' }
      ],
      value: '1' // This filter will be pre-selected with "Active"
    },
    {
      title: 'Price Range',
      type: 'range',
      value: { min: 100, max: 500 } // This range will be pre-set
    },
    {
      title: 'Date',
      type: 'date',
      value: new Date() // Today's date will be pre-selected
    }
  ]
};
```

You can also apply filters programmatically using the `applyFilters` method:

```typescript
// In your component
@ViewChild(TotsFilterBoxComponent) filterBox!: TotsFilterBoxComponent;

// Later in your code
this.filterBox.applyFilters([
  { title: 'Status', value: '2' },
  { title: 'Price Range', value: { min: 200, max: 800 } }
]);
```

### Available Filter Components

The library provides several built-in filter components:

- `StringFilterComponent`: For text input filters
- `MultiUsersFilterComponent`: For selecting multiple users with search
- `MultiSelectFilterComponent`: For selecting multiple options from a dropdown
- `TotsDateRangeFilterComponent`: For selecting date ranges
- `BetweenNumberFilterComponent`: For selecting number ranges
- `MultiSelectObsFilterComponent`: For selecting multiple options with observable data source

### Configuration Options

The component accepts a `TotsFilterBoxConfig` object with the following properties:

```typescript
interface TotsFilterBoxConfig {
  filters: TotsItemFilter[];
  buttonIcon?: string;
  matButtonDirective?: string;
  matButtonColor?: ThemePalette;
  textAddButton?: string;
  textApplyFilters?: string;
  textClearButton?: string;
  textButton?: string;
  menuButtonsColor?: ThemePalette;
  isOnlyIconButton?: boolean;
}
```

### Events

- `apply`: Emitted when filters are applied, providing the selected filter values
- `clear`: Emitted when filters are cleared

## Styling

The component uses Angular Material's theming system and can be customized using CSS variables:

```scss
:host {
  --filter-box-primary-color: #your-color;
  --filter-box-background: #your-background;
}
```

## Dependencies

- Angular Material
- Angular Core
- Moment.js (for date handling)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
