import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelreportComponent } from './excelreport.component';

describe('ExcelreportComponent', () => {
  let component: ExcelreportComponent;
  let fixture: ComponentFixture<ExcelreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcelreportComponent]
    });
    fixture = TestBed.createComponent(ExcelreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
