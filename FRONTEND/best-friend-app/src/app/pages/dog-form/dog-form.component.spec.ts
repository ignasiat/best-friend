import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { FormBuilder } from '@angular/forms'

import { DogFormComponent } from './dog-form.component'

import { DebugElement } from '@angular/core'
import { dogMock } from 'src/app/constants/dog-mock'
import { of } from 'rxjs'
import { Router } from '@angular/router'

describe('DogFormComponent', () => {
  let component: DogFormComponent
  let fixture: ComponentFixture<DogFormComponent>
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogFormComponent],
      providers: [FormBuilder],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DogFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    router = TestBed.inject(Router)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Method dogSubmit should call addApiDogs when input _id equal to ""', () => {
    component.dogForm.patchValue({ _id: '' })

    const addApiDogsSpy = spyOn(
      component.DogStore,
      'addApiDogs').and.returnValue(of(dogMock))

    component.dogSubmit()

    expect(addApiDogsSpy).toHaveBeenCalled()
  })

  it('Method dogSubmit should call updateDogApi when input _id has a value different to ""', () => {
    component.dogForm.patchValue({ _id: 'dogId' })

    const updatedDog = { ...dogMock, _id: 'updatedId' }

    spyOn(component.DogStore, 'updateDogApi').and.returnValue(of(updatedDog))

    const navigateSpy = spyOn(router, 'navigate')

    component.dogSubmit()

    expect(navigateSpy).toHaveBeenCalledWith(['/dog', 'updatedId'])
  })

  it('Method fileChange should call dogForm.patchValue', () => {
    const event = { target: { files: ['fake file'] } }
    const patchValueSpy = spyOn(component.dogForm, 'patchValue')

    component.fileChange(event)

    expect(patchValueSpy).toHaveBeenCalled()
  })

  it('Method onInit should not call patchValue when dog is falsy', () => {
    const patchValueSpy = spyOn(component.dogForm, 'patchValue')

    spyOn(component.DogStore, 'getSelectedDog')

    component.id = 1

    component.ngOnInit()

    expect(patchValueSpy).not.toHaveBeenCalled()
  })

  it('Method onInit should call patchValue when dog is truthy', () => {
    const patchValueSpy = spyOn(component.dogForm, 'patchValue')

    spyOn(component.DogStore, 'getSelectedDog')

    component.id = 1

    component.DogStore.selectedDog$.next(dogMock)

    component.ngOnInit()

    expect(patchValueSpy).toHaveBeenCalled()
  })

  it('Should render a button with value "Upload Dog"', () => {
    const bannerDe: DebugElement = fixture.debugElement
    const bannerEl: HTMLElement = bannerDe.nativeElement
    const button = bannerEl.querySelector('button')
    expect(button.textContent).toEqual(' Upload Dog ')
  })
})
