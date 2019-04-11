import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingListViewComponent } from './booking-list-view.component';

describe('BookingListViewComponent', () => {
  let component: BookingListViewComponent;
  let fixture: ComponentFixture<BookingListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
