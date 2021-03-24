import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { DogStoreService } from '../../core/services/dog-store.service'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'
import { User } from 'src/app/core/models/User'
import { Dog } from 'src/app/core/models/Dog'

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
  providers: [NgbCarouselConfig]
})
export class DogComponent implements OnInit {
  id = this.activatedRoute.snapshot.params.dogId
  selectedDog$ = this.DogStore.selectedDog$
  userLogged: User

  constructor (
  private activatedRoute: ActivatedRoute,
  public DogStore: DogStoreService,
  private router: Router,
  config: NgbCarouselConfig
  ) {
    config.interval = 2000
    config.keyboard = true
    config.pauseOnHover = true
  }

  ngOnInit (): void {
    this.DogStore.getSelectedDog(this.id)
    this.userLogged = this.DogStore.userLogged$.getValue()
  }

  adopt (dog: Dog, userId: string) {
    const newData = { ...dog, adoption: false, owner: { _id: userId } }
    const dogId = dog._id
    delete newData._id
    this.DogStore.updateDogApi(dogId, newData).subscribe(() => this.router.navigate(['/profile']))
  }
}
