import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbrandComponent } from './editbrand.component';

describe('EditbrandComponent', () => {
  let component: EditbrandComponent;
  let fixture: ComponentFixture<EditbrandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditbrandComponent]
    });
    fixture = TestBed.createComponent(EditbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
