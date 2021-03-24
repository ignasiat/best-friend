import { Component, OnInit } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Dog } from 'src/app/core/models/Dog'
import { DogStoreService } from 'src/app/core/services/dog-store.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dogs$: BehaviorSubject<Dog[]> = this.DogStore.dogsAdoption$

  constructor (
    public DogStore: DogStoreService
  ) {}

  ngOnInit (): void {
    if (!this.dogs$.getValue().length) {
      this.DogStore.apiDogsAdoption().subscribe()
    }
  }
}
