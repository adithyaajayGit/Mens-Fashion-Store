import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerregComponent } from './customerreg.component';

describe('CustomerregComponent', () => {
  let component: CustomerregComponent;
  let fixture: ComponentFixture<CustomerregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerregComponent]
    });
    fixture = TestBed.createComponent(CustomerregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
