import { TestBed } from '@angular/core/testing'

import { HttpClientTestingModule } from '@angular/common/http/testing'

import { DogStoreService } from './dog-store.service'
import { of } from 'rxjs'
import { dogMock } from '../../constants/dog-mock'
import { Dog } from '../models/Dog'
import { Breed } from '../models/Breed'
import { Color } from '../models/Color'
import { userMock } from 'src/app/constants/user-mock'
import { User } from '../models/User'

describe('DogStoreService', () => {
  let service: DogStoreService

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
    service = TestBed.inject(DogStoreService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('When apiDogs is called, next method on dogs$ should be called', () => {
    const response: Dog[] = [dogMock]

    spyOn(service.DogService, 'fetchDogs').and.returnValue(of(response))

    const nextSpyOn = spyOn(service.dogs$, 'next')

    service.apiDogs()

    expect(nextSpyOn).toHaveBeenCalled()
  })

  it('When apiBreeds is called, next method on breeds$ should be called', () => {
    const response: Breed[] = [{ _id: 'fake id', name: 'fake breed' }]

    spyOn(service.DogService, 'fetchBreeds').and.returnValue(of(response))

    const nextSpyOn = spyOn(service.breeds$, 'next')

    service.apiBreeds()

    expect(nextSpyOn).toHaveBeenCalled()
  })

  it('When apiColors is called, next method on colors$ should be called', () => {
    const response: Color[] = [{ _id: 'fake id', name: 'fake color' }]

    spyOn(service.DogService, 'fetchColors').and.returnValue(of(response))

    const nextSpyOn = spyOn(service.colors$, 'next')

    service.apiColors()

    expect(nextSpyOn).toHaveBeenCalled()
  })

  it('When apiShelter is called, next method on shelters$ should be called', () => {
    const response: User[] = [userMock]

    spyOn(service.DogService, 'fetchShelters').and.returnValue(of(response))

    const nextSpyOn = spyOn(service.shelters$, 'next')

    service.apiShelter()

    expect(nextSpyOn).toHaveBeenCalled()
  })
  it('When addApiDogs is called with a newDog with adoption true, next method on dogs$ should be called', () => {
    const response: Dog = dogMock

    spyOn(service.DogService, 'addDog').and.returnValue(of(response))

    const nextSpyOn = spyOn(service.dogs$, 'next')

    service.addApiDogs(dogMock)

    expect(nextSpyOn).toHaveBeenCalled()
  })
  it('When addApiDogs is called with a newDog with adoption false, then should not call method next on dog$', () => {
    const response: Dog = { ...dogMock, adoption: false }

    spyOn(service.DogService, 'addDog').and.returnValue(of(response))

    const nextSpyOn = spyOn(service.dogs$, 'next')

    service.addApiDogs(dogMock)

    expect(nextSpyOn).not.toHaveBeenCalled()
  })
  it('When filteredDogs is called with 3 string arguments should call method next on dogCopy$', () => {
    service.dogs$.next([dogMock])

    const nextSpyOn = spyOn(service.dogsCopy$, 'next')

    service.filteredDogs('sex', 'age', 'size')

    expect(nextSpyOn).toHaveBeenCalled()
  })
  it('When filteredDogs is called with 3 string equals to ANY should call method next on dogCopy$', () => {
    service.dogs$.next([dogMock])

    const nextSpyOn = spyOn(service.dogsCopy$, 'next')

    service.filteredDogs('ANY', 'ANY', 'ANY')

    expect(nextSpyOn).toHaveBeenCalled()
  })
  it('When filteredDogs is called with 2 string equals to ANY and age to a different string should call method next on dogCopy$', () => {
    service.dogs$.next([dogMock])

    const nextSpyOn = spyOn(service.dogsCopy$, 'next')

    service.filteredDogs('ANY', 'age', 'ANY')

    expect(nextSpyOn).toHaveBeenCalled()
  })
  it('When filteredDogs is called with 2 string equals to ANY and size to a different string should call method next on dogCopy$', () => {
    service.dogs$.next([dogMock])

    const nextSpyOn = spyOn(service.dogsCopy$, 'next')

    service.filteredDogs('ANY', 'ANY', 'size')

    expect(nextSpyOn).toHaveBeenCalled()
  })
  it('When getSelectedDog is invoked with an id the method next os selectedDog$ is called', () => {
    service.dogs$.next([dogMock])

    const nextSpyOn = spyOn(service.selectedDog$, 'next')

    service.getSelectedDog('String')

    expect(nextSpyOn).toHaveBeenCalled()
  })
})
