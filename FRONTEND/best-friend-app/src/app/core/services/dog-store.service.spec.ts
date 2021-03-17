import { TestBed } from '@angular/core/testing'

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { DogStoreService } from './dog-store.service'
import { of } from 'rxjs'
import { dogMock } from '../../constants/dog-mock'
import { Dog } from '../models/Dog'

describe('DogStoreService', () => {
  let service: DogStoreService

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
    service = TestBed.inject(DogStoreService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('When apiDogsAdoption is called, next method on dogsAdoption$ should be called', () => {
    const response: Dog[] = [dogMock]

    spyOn(service.DogService, 'fetchDogs').and.returnValue(of(response))

    const nextSpyOn = spyOn(service.dogsAdoption$, 'next')

    service.apiDogsAdoption()

    expect(nextSpyOn).toHaveBeenCalled()
  })

  it('When apiBreeds is called, next method on breeds$ should be called', () => {
    const nextSpyOn = spyOn(service.DogService, 'fetchBreeds')

    service.apiBreeds()

    expect(nextSpyOn).toHaveBeenCalled()
  })

  it('When apiColors is called, next method on colors$ should be called', () => {
    const nextSpyOn = spyOn(service.DogService, 'fetchColors')

    service.apiColors()

    expect(nextSpyOn).toHaveBeenCalled()
  })

  it('When apiShelter is called, next method on shelters$ should be called', () => {
    const nextSpyOn = spyOn(service.DogService, 'fetchShelters')

    service.apiShelter()

    expect(nextSpyOn).toHaveBeenCalled()
  })
  it('When addApiDogs is called with a newDog with adoption true, next method on dogs$ should be called', () => {
    const response: Dog = dogMock

    spyOn(service.DogService, 'addDog').and.returnValue(of(response))

    const nextSpyOn = spyOn(service.dogsAdoption$, 'next')

    service.addApiDogs(dogMock)

    expect(nextSpyOn).toHaveBeenCalled()
  })
  it('When addApiDogs is called with a newDog with adoption false, then should not call method next on dog$', () => {
    const response: Dog = { ...dogMock, adoption: false }

    spyOn(service.DogService, 'addDog').and.returnValue(of(response))

    const nextSpyOn = spyOn(service.dogsAdoption$, 'next')

    service.addApiDogs(dogMock)

    expect(nextSpyOn).not.toHaveBeenCalled()
  })
  it('When filteredDogs is called with 3 string arguments should call method next on dogCopy$', () => {
    service.dogsAdoption$.next([dogMock])

    const nextSpyOn = spyOn(service.dogsAdoptionCopy$, 'next')

    service.filteredDogs('sex', 'age', 'size')

    expect(nextSpyOn).toHaveBeenCalled()
  })
  it('When filteredDogs is called with 3 string equals to ANY should call method next on dogCopy$', () => {
    service.dogsAdoption$.next([dogMock])

    const nextSpyOn = spyOn(service.dogsAdoptionCopy$, 'next')

    service.filteredDogs('ANY', 'ANY', 'ANY')

    expect(nextSpyOn).toHaveBeenCalled()
  })
  it('When filteredDogs is called with 2 string equals to ANY and age to a different string should call method next on dogCopy$', () => {
    service.dogsAdoption$.next([dogMock])

    const nextSpyOn = spyOn(service.dogsAdoptionCopy$, 'next')

    service.filteredDogs('ANY', 'age', 'ANY')

    expect(nextSpyOn).toHaveBeenCalled()
  })
  it('When filteredDogs is called with 2 string equals to ANY and size to a different string should call method next on dogCopy$', () => {
    service.dogsAdoption$.next([dogMock])

    const nextSpyOn = spyOn(service.dogsAdoptionCopy$, 'next')

    service.filteredDogs('ANY', 'ANY', 'size')

    expect(nextSpyOn).toHaveBeenCalled()
  })
  it('When getSelectedDog is invoked with an id the method next os selectedDog$ is called', () => {
    service.dogsAdoption$.next([dogMock])

    const nextSpyOn = spyOn(service.selectedDog$, 'next')

    service.getSelectedDog('String')

    expect(nextSpyOn).toHaveBeenCalled()
  })
})
