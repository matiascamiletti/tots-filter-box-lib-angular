import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsFilterBoxComponent } from './tots-filter-box.component';

describe('TotsFilterBoxComponent', () => {
  let component: TotsFilterBoxComponent;
  let fixture: ComponentFixture<TotsFilterBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsFilterBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsFilterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
