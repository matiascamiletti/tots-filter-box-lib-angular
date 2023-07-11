import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetweenNumberFilterComponent } from './between-number-filter.component';

describe('BetweenNumberFilterComponent', () => {
  let component: BetweenNumberFilterComponent;
  let fixture: ComponentFixture<BetweenNumberFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetweenNumberFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetweenNumberFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
