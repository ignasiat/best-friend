import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Dog } from '../models/Dog'
import { DogService } from './dog.service'

@Injectable({
  providedIn: 'root'
})
export class DogStoreService {
  dogs$ = new BehaviorSubject<Dog[]>([])
  dogsCopy$ = new BehaviorSubject<Dog[]>([])
  selectedDog$ = new BehaviorSubject<Dog>(null)

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

  getSelectedDog (dogId): void {
    this.selectedDog$.next(this.getDogs().find((element) => element._id === dogId))
  }

  constructor (private DogService: DogService) { }
}
