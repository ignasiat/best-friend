import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HttpClientTestingModule } from '@angular/common/http/testing'

import { DogsComponent } from './dogs.component'

import { dogMock } from '../../constants/dog-mock'

import { DebugElement } from '@angular/core'

describe('DogsComponent', () => {
  let component: DogsComponent
  let fixture: ComponentFixture<DogsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DogsComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Method search should call filteredDog method from the store', () => {
    const filteredDogsSpy = spyOn(component.DogStoreService, 'filteredDogs')

    component.search('fake sex', 'fake age', 'fake size')

    expect(filteredDogsSpy).toHaveBeenCalled()
  })

  it('Should not call apiDogs onInit when dogs$ has values', () => {
    component.dogs$.next([dogMock])
    const apiDogsSpy = spyOn(component.DogStoreService, 'apiDogs')

    component.ngOnInit()

    expect(apiDogsSpy).not.toHaveBeenCalled()
  })
  it('Should render a title with value "Find your best friend"', () => {
    const bannerDe: DebugElement = fixture.debugElement
    const bannerEl: HTMLElement = bannerDe.nativeElement
    const h1 = bannerEl.querySelector('h1')
    expect(h1.textContent).toEqual('Find your best friend')
  })
})
