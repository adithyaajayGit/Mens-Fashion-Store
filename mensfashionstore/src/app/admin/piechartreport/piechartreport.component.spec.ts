import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartreportComponent } from './piechartreport.component';

describe('PiechartreportComponent', () => {
  let component: PiechartreportComponent;
  let fixture: ComponentFixture<PiechartreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiechartreportComponent]
    });
    fixture = TestBed.createComponent(PiechartreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
