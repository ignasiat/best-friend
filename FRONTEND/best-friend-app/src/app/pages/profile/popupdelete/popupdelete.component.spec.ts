import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { PopupdeleteComponent } from './popupdelete.component'
import { DogStoreService } from 'src/app/core/services/dog-store.service'
import { dogMock } from 'src/app/constants/dog-mock'
import { of } from 'rxjs'
import { userMock } from 'src/app/constants/user-mock'

describe('PopupdeleteComponent', () => {
  let component: PopupdeleteComponent
  let fixture: ComponentFixture<PopupdeleteComponent>
  let modal: NgbModal
  let dogStore: DogStoreService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        NgbModalModule,
        NgbModule],
      declarations: [PopupdeleteComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupdeleteComponent)
    modal = TestBed.inject(NgbModal)
    dogStore = TestBed.inject(DogStoreService)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should invoke modal method dismissAll when close is invoked', () => {
    const nextSpyOn = spyOn(modal, 'dismissAll')

    component.close()

    expect(nextSpyOn).toHaveBeenCalled()
  })

  it('should invoke modal method dismissAll when delete is invoked', () => {
    const nextSpyOn = spyOn(modal, 'dismissAll')

    spyOn(dogStore, 'eraseDogApi').and.returnValue(of(dogMock))

    component.userLogged$.next(userMock)

    component.delete()

    expect(nextSpyOn).toHaveBeenCalled()
  })
})
