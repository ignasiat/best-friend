import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PopupComponent } from './popup.component'

import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'

describe('PopupComponent', () => {
  let component: PopupComponent
  let fixture: ComponentFixture<PopupComponent>
  let modal: NgbModal

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbModalModule, NgbModule],
      declarations: [PopupComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupComponent)
    modal = TestBed.inject(NgbModal)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Should call dismissAll when close is invoked', () => {
    const nextSpyOn = spyOn(modal, 'dismissAll')

    component.close('close')

    expect(nextSpyOn).toHaveBeenCalled()
  })
})
