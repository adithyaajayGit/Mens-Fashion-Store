import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartreportComponent } from './barchartreport.component';

describe('BarchartreportComponent', () => {
  let component: BarchartreportComponent;
  let fixture: ComponentFixture<BarchartreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarchartreportComponent]
    });
    fixture = TestBed.createComponent(BarchartreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
