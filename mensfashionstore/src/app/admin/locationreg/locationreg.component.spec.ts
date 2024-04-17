import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationregComponent } from './locationreg.component';

describe('LocationregComponent', () => {
  let component: LocationregComponent;
  let fixture: ComponentFixture<LocationregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationregComponent]
    });
    fixture = TestBed.createComponent(LocationregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
