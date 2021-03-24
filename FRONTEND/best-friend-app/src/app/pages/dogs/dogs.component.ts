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

  dogs$ = this.DogStore.dogsAdoption$
  dogsCopy$ = this.DogStore.dogsAdoptionCopy$

  constructor (public DogStore: DogStoreService) {

  }

  ngOnInit (): void {
    if (!this.dogs$.getValue().length) {
      this.DogStore.apiDogsAdoption().subscribe()
    }
    this.search('ANY', 'ANY', 'ANY')
  }

  search (sexValue: string, ageValue: string, sizeValue: string) {
    this.DogStore.filteredDogs(sexValue, ageValue, sizeValue)
  }
}
