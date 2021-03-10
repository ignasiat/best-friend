import { Component, OnInit } from '@angular/core'
import { constants } from '../../constants/index'
import { DogStoreService } from 'src/app/core/services/dog-store.service'
import { BehaviorSubject } from 'rxjs'
import { Dog } from '../../core/models/Dog'

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  sexs = [constants.FEMALE, constants.MALE, constants.ANY]
  ages = [constants.PUPPY, constants.YOUNG, constants.ADULT, constants.SENIOR, constants.ANY]
  sizes = [constants.SMALL, constants.MEDIUM, constants.LARGE, constants.XLARGE, constants.ANY]

  dogs$ = this.DogStoreService.dogs$
  dogsCopy$ = this.DogStoreService.dogsCopy$

  constructor (private DogStoreService: DogStoreService) {

  }

  ngOnInit (): void {
    if (!this.dogs$.getValue().length) {
      this.DogStoreService.apiDogs()
    }
    this.dogsCopy$.next(this.dogs$.getValue())
  }

  search (sexValue: String, ageValue: String, sizeValue:String) {
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
}
