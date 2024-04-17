import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryregComponent } from './categoryreg.component';

describe('CategoryregComponent', () => {
  let component: CategoryregComponent;
  let fixture: ComponentFixture<CategoryregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryregComponent]
    });
    fixture = TestBed.createComponent(CategoryregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
