import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintFilterComponent } from './print-filter.component';

describe('PrintFilterComponent', () => {
  let component: PrintFilterComponent;
  let fixture: ComponentFixture<PrintFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
