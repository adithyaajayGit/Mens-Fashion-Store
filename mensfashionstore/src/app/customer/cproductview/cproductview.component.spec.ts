import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CproductviewComponent } from './cproductview.component';

describe('CproductviewComponent', () => {
  let component: CproductviewComponent;
  let fixture: ComponentFixture<CproductviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CproductviewComponent]
    });
    fixture = TestBed.createComponent(CproductviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
