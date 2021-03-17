import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DogStoreService } from '../../core/services/dog-store.service'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
  providers: [NgbCarouselConfig]
})
export class DogComponent implements OnInit {
  id = this.activatedRoute.snapshot.params.dogId
  selectedDog$ = this.DogStoreService.selectedDog$

  constructor (
  private activatedRoute: ActivatedRoute,
  private DogStoreService: DogStoreService,
  config: NgbCarouselConfig
  ) {
    config.interval = 2000
    config.keyboard = true
    config.pauseOnHover = true
  }

  ngOnInit (): void {
    this.DogStoreService.getSelectedDog(this.id)
  }
}
