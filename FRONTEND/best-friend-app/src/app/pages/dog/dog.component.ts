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
  selectedDog$ = this.DogStoreService.selectedDog$
  userLogged: User

  constructor (
  private activatedRoute: ActivatedRoute,
  private DogStoreService: DogStoreService,
  private router: Router,
  config: NgbCarouselConfig
  ) {
    config.interval = 2000
    config.keyboard = true
    config.pauseOnHover = true
  }

  ngOnInit (): void {
    this.DogStoreService.getSelectedDog(this.id)
    this.userLogged = this.DogStoreService.userLogged$.getValue()
  }

  adopt (dog: Dog, userId: string) {
    const newData = { ...dog, adoption: false, owner: { _id: userId } }
    const dogId = dog._id
    delete newData._id
    this.DogStoreService.updateDogApi(dogId, newData).subscribe(() => this.router.navigate(['/profile']))
  }
}
