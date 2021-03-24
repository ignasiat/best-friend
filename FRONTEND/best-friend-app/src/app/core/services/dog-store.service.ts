import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Dog } from '../models/Dog'
import { DogService } from './dog.service'
import { constants } from '../../constants/index'
import { Color } from '../models/Color'
import { Breed } from '../models/Breed'
import { User } from '../models/User'
import { SignIn } from '../models/Sign-In'
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DogStoreService {
  dogs$ = new BehaviorSubject<Dog[]>([])
  dogsAdoption$ = new BehaviorSubject<Dog[]>([])
  dogsAdoptionCopy$ = new BehaviorSubject<Dog[]>([])
  dogsUser$ = new BehaviorSubject<Dog[]>([])
  selectedDog$ = new BehaviorSubject<Dog>(null)
  userLogged$ = new BehaviorSubject<User>(null)

  apiDogsAdoption (): Observable<Dog[]> {
    return this.DogServ.fetchDogs()
      .pipe(
        tap((dogs) => { this.dogs$.next(dogs) }),
        map(dogs =>
          dogs.filter(dog => dog.adoption === true)),
        tap((answer) => {
          this.dogsAdoption$.next(answer)
          this.dogsAdoptionCopy$.next(answer)
        })
      )
  }

  filterUserDogs (userId: string) : void {
    this.dogsUser$.next(this.dogs$.getValue().filter((dog) => dog.shelter._id === userId))
  }

  filterAdoptionDogs (): void {
    const adoptionDogs = this.dogs$.getValue().filter((dog) => dog.adoption)
    this.dogsAdoption$.next(adoptionDogs)
    this.dogsAdoptionCopy$.next(adoptionDogs)
  }

  apiBreeds (): Observable<Breed[]> {
    return this.DogServ.fetchBreeds()
  }

  apiColors (): Observable<Color[]> {
    return this.DogServ.fetchColors()
  }

  apiShelter (): Observable<User[]> {
    return this.DogServ.fetchShelters()
  }

  addApiDogs (newDog: Dog): Observable<Dog> {
    return this.DogServ.addDog(newDog)
      .pipe(
        tap(dog => {
          this.dogs$.next([...this.dogs$.getValue(), dog])
          if (dog.adoption) {
            const newDogs: Dog[] = [...this.dogsAdoption$.getValue(), dog]
            this.dogsAdoption$.next(newDogs)
            this.dogsAdoptionCopy$.next(newDogs)
          }
        }))
  }

  filteredDogs (sexValue: string, ageValue: string, sizeValue:string) {
    let filtered: Dog[] = this.dogsAdoption$.getValue()
    if (sexValue && sexValue !== constants.ANY) {
      filtered = filtered.filter((element) => element.sex === sexValue)
    }
    if (ageValue && ageValue !== constants.ANY) {
      filtered = filtered.filter((element) => element.age === ageValue)
    }
    if (sizeValue && sizeValue !== constants.ANY) {
      filtered = filtered.filter((element) => element.size === sizeValue)
    }
    this.dogsAdoptionCopy$.next(filtered)
  }

  getSelectedDog (dogId): void {
    this.selectedDog$.next(this.dogs$.getValue().find((element) => element._id === dogId))
  }

  apiSignIn (signData: SignIn) {
    return this.DogServ.signIn(signData)
      .pipe(tap((answer) => { this.userLogged$.next(answer) }))
  }

  apiSignOut () : void {
    this.DogServ.signOut().subscribe(() => this.userLogged$.next(null))
  }

  updateDogApi (dogId: string, newData: Dog): Observable<Dog> {
    return this.DogServ.updateApiDog(dogId, newData)
      .pipe(
        tap(dog => this.dogs$.next(this.dogs$.getValue().map((itemDog) => {
          if (itemDog._id === dogId) {
            return dog
          } else {
            return itemDog
          }
        }))),
        tap(dog => {
          this.selectedDog$.next(dog)
          this.filterAdoptionDogs()
        })
      )
  }

  eraseDogApi (dogId: string): Observable<Dog> {
    return this.DogServ.deleteApiDog(dogId)
      .pipe(
        tap(dog => this.dogs$.next(this.dogs$.getValue().filter(dogItem => dogItem._id !== dogId)))
      )
  }

  constructor (
    private DogServ: DogService
  ) {}
}
