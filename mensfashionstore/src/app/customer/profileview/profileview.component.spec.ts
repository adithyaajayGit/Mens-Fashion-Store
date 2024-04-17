import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileviewComponent } from './profileview.component';

describe('ProfileviewComponent', () => {
  let component: ProfileviewComponent;
  let fixture: ComponentFixture<ProfileviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileviewComponent]
    });
    fixture = TestBed.createComponent(ProfileviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
