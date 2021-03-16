import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { Dog } from 'src/app/core/models/Dog'
import { DogStoreService } from 'src/app/core/services/dog-store.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id = this.activatedRoute.snapshot.params.userId

  constructor (private activatedRoute: ActivatedRoute, private DogStoreService: DogStoreService) { }

  selectedshelter: any
  ourDogs$: Observable<Dog[]>

  ngOnInit (): void {
    this.DogStoreService.apiShelter().subscribe((shelters) => { this.selectedshelter = shelters.find((shelter) => shelter._id === this.id) })
    this.ourDogs$ = this.DogStoreService.apiDogsUser(this.id)
  }
}
