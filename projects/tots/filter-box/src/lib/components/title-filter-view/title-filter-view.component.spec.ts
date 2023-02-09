import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFilterViewComponent } from './title-filter-view.component';

describe('TitleFilterViewComponent', () => {
  let component: TitleFilterViewComponent;
  let fixture: ComponentFixture<TitleFilterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleFilterViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleFilterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
