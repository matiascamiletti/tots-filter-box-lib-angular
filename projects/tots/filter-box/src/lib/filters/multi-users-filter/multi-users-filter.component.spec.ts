import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiUsersFilterComponent } from './multi-users-filter.component';

describe('MultiUsersFilterComponent', () => {
  let component: MultiUsersFilterComponent;
  let fixture: ComponentFixture<MultiUsersFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiUsersFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiUsersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
