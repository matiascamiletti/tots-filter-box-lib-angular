import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalFilterViewComponent } from './conditional-filter-view.component';

describe('ConditionalFilterViewComponent', () => {
  let component: ConditionalFilterViewComponent;
  let fixture: ComponentFixture<ConditionalFilterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalFilterViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalFilterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
