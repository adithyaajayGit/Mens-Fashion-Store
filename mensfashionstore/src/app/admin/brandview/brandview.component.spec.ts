import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandviewComponent } from './brandview.component';

describe('BrandviewComponent', () => {
  let component: BrandviewComponent;
  let fixture: ComponentFixture<BrandviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandviewComponent]
    });
    fixture = TestBed.createComponent(BrandviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
