import { Injectable } from '@angular/core'
import { BehaviorSubject, of } from 'rxjs'
import { Dog } from '../models/Dog'
import { DogService } from './dog.service'
import { constants } from '../../constants/index'
import { Color } from '../models/Color'
import { Breed } from '../models/Breed'
import { User } from '../models/User'
import { SignIn } from '../models/SignIn'
import { tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DogStoreService {
  dogs$ = new BehaviorSubject<Dog[]>([])
  dogsCopy$ = new BehaviorSubject<Dog[]>([])
  selectedDog$ = new BehaviorSubject<Dog>(null)
  breeds$ = new BehaviorSubject<Color[]>([])
  colors$ = new BehaviorSubject<Breed[]>([])
  shelters$ = new BehaviorSubject<User[]>([])
  userLogged$ = new BehaviorSubject<User>(null)

  getDogs (): Dog[] {
    return this.dogs$.getValue()
  }

  apiDogs (): void {
    this.DogService.fetchDogs().subscribe((answer) => {
      answer = answer.filter(dog => dog.adoption)
      this.dogs$.next(answer)
      this.dogsCopy$.next(answer)
    })
  }

  apiBreeds (): void {
    this.DogService.fetchBreeds().subscribe((answer) => this.breeds$.next(answer))
  }

  apiColors (): void {
    this.DogService.fetchColors().subscribe((answer) => this.colors$.next(answer))
  }

  apiShelter (): void {
    this.DogService.fetchShelters().subscribe((answer) => this.shelters$.next(answer))
  }

  addApiDogs (newDog: Dog): void {
    this.DogService.addDog(newDog).subscribe((answer) => {
      if (answer.adoption) {
        const newDogs: Dog[] = [...this.getDogs(), answer]
        this.dogs$.next(newDogs)
        this.dogsCopy$.next(newDogs)
      }
    })
  }

  filteredDogs (sexValue: String, ageValue: String, sizeValue:String) {
    let filtered: Dog[] = this.dogs$.getValue()
    if (sexValue && sexValue !== constants.ANY) {
      filtered = filtered.filter((element) => element.sex === sexValue)
    }
    if (ageValue && ageValue !== constants.ANY) {
      filtered = filtered.filter((element) => element.age === ageValue)
    }
    if (sizeValue && sizeValue !== constants.ANY) {
      filtered = filtered.filter((element) => element.size === sizeValue)
    }
    this.dogsCopy$.next(filtered)
  }

  getSelectedDog (dogId): void {
    this.selectedDog$.next(this.getDogs().find((element) => element._id === dogId))
  }

  apiSignIn (signData: SignIn) {
    return this.DogService.signIn(signData).pipe(tap((answer) => this.userLogged$.next(answer)), catchError((error) => of(error)))
  }

  apiSignOut () : void {
    this.DogService.signOut().subscribe(() => this.userLogged$.next(null))
  }

  constructor (public DogService: DogService) { }
}
