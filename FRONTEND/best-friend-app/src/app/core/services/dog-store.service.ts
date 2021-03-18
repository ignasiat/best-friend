import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Dog } from '../models/Dog'
import { DogService } from './dog.service'
import { constants } from '../../constants/index'
import { Color } from '../models/Color'
import { Breed } from '../models/Breed'
import { User } from '../models/User'
import { SignIn } from '../models/SignIn'
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DogStoreService {
  dogs$ = new BehaviorSubject<Dog[]>([])
  dogsAdoption$ = new BehaviorSubject<Dog[]>([])
  dogsAdoptionCopy$ = new BehaviorSubject<Dog[]>([])
  selectedDog$ = new BehaviorSubject<Dog>(null)
  userLogged$ = new BehaviorSubject<User>(null)

  apiDogsAdoption (): Observable<Dog[]> {
    return this.DogService.fetchDogs()
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

  apiDogsUser (userId: String): Observable<Dog[]> {
    return this.DogService.fetchDogs().pipe(
      map(dogs =>
        dogs.filter(dog => dog.shelter._id === userId)))
  }

  apiBreeds (): Observable<Breed[]> {
    return this.DogService.fetchBreeds()
  }

  apiColors (): Observable<Color[]> {
    return this.DogService.fetchColors()
  }

  apiShelter (): Observable<any> {
    return this.DogService.fetchShelters()
  }

  addApiDogs (newDog: Dog): Observable<Dog> {
    return this.DogService.addDog(newDog)
      .pipe(
        tap(dog => {
          if (dog.adoption) {
            const newDogs: Dog[] = [...this.dogsAdoption$.getValue(), dog]
            this.dogsAdoption$.next(newDogs)
            this.dogsAdoptionCopy$.next(newDogs)
          }
        }))
  }

  filteredDogs (sexValue: String, ageValue: String, sizeValue:String) {
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
    return this.DogService.signIn(signData)
      .pipe(tap((answer) => { this.userLogged$.next(answer) }))
  }

  apiSignOut () : void {
    this.DogService.signOut().subscribe(() => this.userLogged$.next(null))
  }

  constructor (
    public DogService: DogService
  ) {}
}
