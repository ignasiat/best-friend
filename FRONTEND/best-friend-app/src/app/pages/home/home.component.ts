import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Dog } from 'src/app/core/models/Dog'
import { DogStoreService } from 'src/app/core/services/dog-store.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  dogs$: Observable<Dog[]> = this.DogStoreService.apiDogsAdoption()
    .pipe(
      map((dogsArray) => dogsArray.slice(0, 6)))

  constructor (
    public DogStoreService: DogStoreService
  ) {
  }
}
