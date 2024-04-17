import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomermasterComponent } from './customermaster.component';

describe('CustomermasterComponent', () => {
  let component: CustomermasterComponent;
  let fixture: ComponentFixture<CustomermasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomermasterComponent]
    });
    fixture = TestBed.createComponent(CustomermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
