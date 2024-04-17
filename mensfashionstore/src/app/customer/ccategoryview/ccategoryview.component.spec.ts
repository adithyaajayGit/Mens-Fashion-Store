import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcategoryviewComponent } from './ccategoryview.component';

describe('CcategoryviewComponent', () => {
  let component: CcategoryviewComponent;
  let fixture: ComponentFixture<CcategoryviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CcategoryviewComponent]
    });
    fixture = TestBed.createComponent(CcategoryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
