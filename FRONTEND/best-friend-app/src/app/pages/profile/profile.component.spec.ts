import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { ProfileComponent } from './profile.component'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { UserCardComponent } from 'src/app/components/user-card/user-card.component'
import { DogCardComponent } from 'src/app/components/dog-card/dog-card.component'
import { DogCardContentComponent } from 'src/app/components/dog-card-content/dog-card-content.component'
import { DogStoreService } from 'src/app/core/services/dog-store.service'
import { dogMock } from 'src/app/constants/dog-mock'
import { of } from 'rxjs'
import { userMock } from 'src/app/constants/user-mock'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { PopupdeleteComponent } from './popupdelete/popupdelete.component'

describe('ProfileComponent', () => {
  let component: ProfileComponent
  let fixture: ComponentFixture<ProfileComponent>
  let dogStore: DogStoreService
  let ngbModal: NgbModal

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        UserCardComponent,
        DogCardComponent,
        DogCardContentComponent,
        PopupdeleteComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatCardModule,
        MatIconModule
      ]
    })
      .compileComponents()
  })

  beforeEach(() => {
    dogStore = TestBed.inject(DogStoreService)
    ngbModal = TestBed.inject(NgbModal)
    fixture = TestBed.createComponent(ProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should onInit call apiDogsAdoption if dog$ has a length of 0', () => {
    component.dogs$.next([])

    const nextSpyOn = spyOn(dogStore, 'apiDogsAdoption').and.returnValue(of([dogMock]))

    component.ngOnInit()

    expect(nextSpyOn).toHaveBeenCalled()
  })

  it('should onInit not call apiDogsAdoption if dog$ has a length different of 0', () => {
    component.dogs$.next([dogMock])

    const nextSpyOn = spyOn(dogStore, 'apiDogsAdoption')

    component.ngOnInit()

    expect(nextSpyOn).not.toHaveBeenCalled()
  })

  it('should have a isLogged$._id with value "userId" when userLogged$ receives a user with _id equal to "userId"', () => {
    dogStore.userLogged$.next(userMock)

    const answer = component.isLogged$.getValue()

    expect(answer._id).toEqual('userId')
  })

  it('should invoke filter on onInit when user is truthy"', () => {
    component.dogs$.next([])

    spyOn(dogStore, 'apiDogsAdoption').and.returnValue(of([dogMock]))

    component.isLogged$.next(userMock)

    const nextSpyOn = spyOn(component, 'filter')

    component.ngOnInit()

    expect(nextSpyOn).toHaveBeenCalled()
  })

  it('should open a modal window when method delete is invoked', () => {
    const nextSpyOn = spyOn(ngbModal, 'open').and.callThrough()

    component.delete('testDogId')

    expect(nextSpyOn).toHaveBeenCalled()
  })

  it('should invoke the filter method when adoption is invoked and user is truthy', () => {
    const nextSpyOn = spyOn(component, 'filter')

    spyOn(dogStore, 'updateDogApi').and.returnValue(of(null))

    component.isLogged$.next(userMock)

    component.adoption(dogMock, true)

    expect(nextSpyOn).toHaveBeenCalled()
  })

  it('should not invoke the filter method when adoption is invoked and user is falsy', () => {
    const nextSpyOn = spyOn(component, 'filter')

    spyOn(dogStore, 'updateDogApi').and.returnValue(of(null))

    component.isLogged$.next(null)

    component.adoption(dogMock, true)

    expect(nextSpyOn).not.toHaveBeenCalled()
  })

  it('should', () => {
    component.dogsUser$.next([dogMock])
    component.dogs$.next([dogMock])

    component.filter('userId')

    expect(component.dogsUserForAdoption).toEqual([dogMock])
  })
})
