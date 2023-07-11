import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectObsFilterComponent } from './multi-select-obs-filter.component';

describe('MultiSelectObsFilterComponent', () => {
  let component: MultiSelectObsFilterComponent;
  let fixture: ComponentFixture<MultiSelectObsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelectObsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelectObsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
