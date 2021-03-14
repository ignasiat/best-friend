import { Component, OnInit } from '@angular/core'
import { DogStoreService } from 'src/app/core/services/dog-store.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dogs$ = this.DogStoreService.dogs$

  constructor (public DogStoreService: DogStoreService) {

  }

  ngOnInit (): void {
    if (!this.dogs$.getValue().length) {
      this.DogStoreService.apiDogs()
    }
  }
}
