import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupdeleteComponent } from './popupdelete.component';

describe('PopupdeleteComponent', () => {
  let component: PopupdeleteComponent;
  let fixture: ComponentFixture<PopupdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupdeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
