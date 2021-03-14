import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FormBuilder } from '@angular/forms'

import { DogFormComponent } from './dog-form.component'

import { userMock } from '../../constants/user-mock'

import { DebugElement } from '@angular/core'

describe('DogFormComponent', () => {
  let component: DogFormComponent
  let fixture: ComponentFixture<DogFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogFormComponent], providers: [FormBuilder], imports: [HttpClientTestingModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DogFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Method dogSubmit should call addApiDogs', () => {
    const addApiDogsSpy = spyOn(
      component.DogStoreService,
      'addApiDogs')

    component.dogSubmit()

    expect(addApiDogsSpy).toHaveBeenCalled()
  })

  it('Method fileChange should call dogForm.patchValue', () => {
    const event = { target: { files: ['fake file'] } }
    const patchValueSpy = spyOn(component.dogForm, 'patchValue')

    component.fileChange(event)

    expect(patchValueSpy).toHaveBeenCalled()
  })

  it('Should not called apiBreed onInit if breeds$ have values', () => {
    component.breeds$.next([{ _id: '1', name: 'fake breed' }])

    const apiBreedsSpy = spyOn(component.DogStoreService, 'apiBreeds')

    component.ngOnInit()

    expect(apiBreedsSpy).not.toHaveBeenCalled()
  })

  it('Should not called apiColor onInit if colors$ have values', () => {
    component.colors$.next([{ _id: '1', name: 'fake color' }])

    const apiColorsSpy = spyOn(component.DogStoreService, 'apiColors')

    component.ngOnInit()

    expect(apiColorsSpy).not.toHaveBeenCalled()
  })

  it('Should not called apiShelter onInit if shelters$ have values', () => {
    component.shelters$.next([userMock])

    const apiShelterSpy = spyOn(component.DogStoreService, 'apiShelter')

    component.ngOnInit()

    expect(apiShelterSpy).not.toHaveBeenCalled()
  })
  it('Should render a button with value "Upload Dog"', () => {
    const bannerDe: DebugElement = fixture.debugElement
    const bannerEl: HTMLElement = bannerDe.nativeElement
    const button = bannerEl.querySelector('button')
    expect(button.textContent).toEqual('Upload Dog')
  })
})
