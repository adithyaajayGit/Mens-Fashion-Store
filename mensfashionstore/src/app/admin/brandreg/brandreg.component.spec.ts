import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandregComponent } from './brandreg.component';

describe('BrandregComponent', () => {
  let component: BrandregComponent;
  let fixture: ComponentFixture<BrandregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandregComponent]
    });
    fixture = TestBed.createComponent(BrandregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
