import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockaddComponent } from './stockadd.component';

describe('StockaddComponent', () => {
  let component: StockaddComponent;
  let fixture: ComponentFixture<StockaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockaddComponent]
    });
    fixture = TestBed.createComponent(StockaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
