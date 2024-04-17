import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationviewComponent } from './locationview.component';

describe('LocationviewComponent', () => {
  let component: LocationviewComponent;
  let fixture: ComponentFixture<LocationviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationviewComponent]
    });
    fixture = TestBed.createComponent(LocationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
