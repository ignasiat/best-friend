import { DogStoreService } from './dog-store.service'
import { of } from 'rxjs'
import { dogMock } from '../../constants/dog-mock'
import { Dog } from '../models/Dog'
import { signInMock } from 'src/app/constants/sign-in-mock'
import { userMock } from 'src/app/constants/user-mock'

describe('DogStoreService', () => {
  let service: DogStoreService
  let dogServiceSpy: {
    fetchDogs: jasmine.Spy,
    fetchBreeds: jasmine.Spy,
    fetchColors: jasmine.Spy,
    fetchShelters: jasmine.Spy,
    addDog: jasmine.Spy,
    signIn: jasmine.Spy,
    signOut: jasmine.Spy,
    updateApiDog: jasmine.Spy,
    deleteApiDog: jasmine.Spy
  }

  beforeEach(() => {
    dogServiceSpy = jasmine.createSpyObj(
      'DogService',
      [
        'fetchDogs',
        'fetchBreeds',
        'fetchColors',
        'fetchShelters',
        'addDog',
        'signIn',
        'signOut',
        'updateApiDog',
        'deleteApiDog'
      ])
    service = new DogStoreService(dogServiceSpy as any)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('When apiDogsAdoption is called,  Dogservice.fetchDogs should be invoked 1 time', () => {
    dogServiceSpy.fetchDogs.and.returnValue(of([dogMock]))

    service.apiDogsAdoption()

    expect(dogServiceSpy.fetchDogs.calls.count()).toBe(1)
  })

  it('When apiBreeds is called, DogService.fetchBreeds should be invoked 1 time', () => {
    service.apiBreeds()

    expect(dogServiceSpy.fetchBreeds.calls.count()).toBe(1)
  })

  it('When apiColors is called, DogService.fetchColors should be invoked 1 time', () => {
    service.apiColors()

    expect(dogServiceSpy.fetchColors.calls.count()).toBe(1)
  })

  it('When apiShelter is called, DogService.fetchColors should be invoked 1 time', () => {
    service.apiShelter()

    expect(dogServiceSpy.fetchShelters.calls.count()).toBe(1)
  })

  it('When addApiDogs is invoked DogService.addDog should be invoked 1 time', () => {
    dogServiceSpy.addDog.and.returnValue(of(dogMock))

    service.addApiDogs(dogMock)

    expect(dogServiceSpy.addDog.calls.count()).toBe(1)
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
    service.dogs$.next([dogMock])

    const nextSpyOn = spyOn(service.selectedDog$, 'next')

    service.getSelectedDog('String')

    expect(nextSpyOn).toHaveBeenCalled()
  })

  it('When filterAdoptionDogs is invoked the method next in dogsAdoption$ should be called', () => {
    service.dogs$.next([dogMock])

    const nextSpyOn = spyOn(service.dogsAdoption$, 'next')

    service.filterAdoptionDogs()

    expect(nextSpyOn).toHaveBeenCalled()
  })

  it('When filterUserDogs is invoked with a userId the method next of dogUser$ should be called', () => {
    service.dogs$.next([dogMock])

    const nextSpyOn = spyOn(service.dogsUser$, 'next')

    service.filterUserDogs('dogId')

    expect(nextSpyOn).toHaveBeenCalled()
  })

  it('When apiSignIn is invoked DogService.signIn is called 1 time', () => {
    dogServiceSpy.signIn.and.returnValue(of(userMock))

    service.apiSignIn(signInMock)

    expect(dogServiceSpy.signIn.calls.count()).toBe(1)
  })

  it('When apiSignOut is invoked DogService.signout is called 1 time', () => {
    dogServiceSpy.signOut.and.returnValue(of(null))

    service.apiSignOut()

    expect(dogServiceSpy.signOut.calls.count()).toBe(1)
  })

  it('When updateDogApi is invoked DogService.updateDogapi is called 1 time', () => {
    dogServiceSpy.updateApiDog.and.returnValue(of(dogMock))

    service.updateDogApi('dogId', dogMock)

    expect(dogServiceSpy.updateApiDog.calls.count()).toBe(1)
  })

  it('When eraseDogApi is invoked DogService.deleteApiDog is called 1 time', () => {
    dogServiceSpy.deleteApiDog.and.returnValue(of(dogMock))

    service.eraseDogApi('dogId')

    expect(dogServiceSpy.deleteApiDog.calls.count()).toBe(1)
  })
})
