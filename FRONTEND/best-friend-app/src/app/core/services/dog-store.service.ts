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

  getDogs (): Dog[] {
    return this.dogs$.getValue()
  }

  apiDogs (): void {
    this.DogService.fetchDogs().subscribe((answer) => {
      this.dogs$.next(answer)
      this.dogsCopy$.next(answer)
    })
  }

  constructor (private DogService: DogService) { }
}
