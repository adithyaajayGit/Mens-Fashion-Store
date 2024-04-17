import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductregComponent } from './productreg.component';

describe('ProductregComponent', () => {
  let component: ProductregComponent;
  let fixture: ComponentFixture<ProductregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductregComponent]
    });
    fixture = TestBed.createComponent(ProductregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
