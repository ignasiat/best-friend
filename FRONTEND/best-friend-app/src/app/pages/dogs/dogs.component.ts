import { Component, OnInit } from '@angular/core'
import { constants } from '../../constants/index'
import { DogStoreService } from 'src/app/core/services/dog-store.service'
import { sexs } from 'src/app/constants/sexs'
import { ages } from 'src/app/constants/ages'
import { sizes } from 'src/app/constants/sizes'

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  sexArray = [...sexs, constants.ANY]
  ageArray = [...ages, constants.ANY]
  sizeArray = [...sizes, constants.ANY]

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
    this.DogStoreService.filteredDogs(sexValue, ageValue, sizeValue)
  }
}
