import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/operators'
import { DogStoreService } from 'src/app/core/services/dog-store.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  id = this.activatedRoute.snapshot.params.userId

  constructor (private activatedRoute: ActivatedRoute, private DogStoreService: DogStoreService) { }

  selectedshelter$ = this.DogStoreService.apiShelter()
    .pipe(
      map((shelters) => shelters.find((shelter) => shelter._id === this.id))
    )

  ourDogs$ = this.DogStoreService.apiDogsUser(this.id)
}
