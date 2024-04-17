import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdeliveryComponent } from './cdelivery.component';

describe('CdeliveryComponent', () => {
  let component: CdeliveryComponent;
  let fixture: ComponentFixture<CdeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdeliveryComponent]
    });
    fixture = TestBed.createComponent(CdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
