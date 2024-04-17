import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CproductviewmoreComponent } from './cproductviewmore.component';

describe('CproductviewmoreComponent', () => {
  let component: CproductviewmoreComponent;
  let fixture: ComponentFixture<CproductviewmoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CproductviewmoreComponent]
    });
    fixture = TestBed.createComponent(CproductviewmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
