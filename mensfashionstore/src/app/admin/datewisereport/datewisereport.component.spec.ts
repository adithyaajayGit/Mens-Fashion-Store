import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatewisereportComponent } from './datewisereport.component';

describe('DatewisereportComponent', () => {
  let component: DatewisereportComponent;
  let fixture: ComponentFixture<DatewisereportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatewisereportComponent]
    });
    fixture = TestBed.createComponent(DatewisereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
