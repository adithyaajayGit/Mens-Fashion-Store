import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductviewComponent } from './productview.component';

describe('ProductviewComponent', () => {
  let component: ProductviewComponent;
  let fixture: ComponentFixture<ProductviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductviewComponent]
    });
    fixture = TestBed.createComponent(ProductviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
