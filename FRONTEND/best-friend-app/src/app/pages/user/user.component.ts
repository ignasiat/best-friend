import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/operators'
import { DogStoreService } from 'src/app/core/services/dog-store.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id = this.activatedRoute.snapshot.params.userId

  constructor (
    private activatedRoute: ActivatedRoute,
    private DogStore: DogStoreService
  ) {}

  selectedshelter$ = this.DogStore.apiShelter()
    .pipe(
      map((shelters) => shelters.find((shelter) => shelter._id === this.id))
    )

  dogsUser$ = this.DogStore.dogsUser$
    .pipe(
      map(dogs => dogs.filter(dog => dog.adoption)
      )
    )

  ngOnInit () {
    this.DogStore.filterUserDogs(this.id)
  }
}
