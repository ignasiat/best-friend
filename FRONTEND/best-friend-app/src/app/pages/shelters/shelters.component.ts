import { Component, OnInit } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { User } from 'src/app/core/models/User'
import { DogStoreService } from 'src/app/core/services/dog-store.service'

@Component({
  selector: 'app-shelters',
  templateUrl: './shelters.component.html',
  styleUrls: ['./shelters.component.scss']
})
export class SheltersComponent implements OnInit {
  constructor (
    private DogStore: DogStoreService
  ) {}

  shelters$ = new BehaviorSubject<User[]>([])
  dogs$ = this.DogStore.dogs$

  ngOnInit (): void {
    if (!this.shelters$.getValue().length) {
      this.DogStore.apiShelter().subscribe((answer) => { this.shelters$.next(answer) })
    }
    if (!this.dogs$.getValue().length) {
      this.DogStore.apiDogsAdoption().subscribe()
    }
  }
}
