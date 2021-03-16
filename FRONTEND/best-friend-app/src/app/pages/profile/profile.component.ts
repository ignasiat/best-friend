import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Dog } from '../../core/models/Dog'
import { DogStoreService } from 'src/app/core/services/dog-store.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor (private DogStoreService: DogStoreService, private router: Router) { }
  userLogged: any
  ourDogs$: Observable<Dog[]>

  ngOnInit (): void {
    this.DogStoreService.userLogged$.subscribe((user) => {
      this.userLogged = user
    })
    this.ourDogs$ = this.DogStoreService.apiDogsUser(this.userLogged?._id)

    if (!this.userLogged) {
      this.router.navigate(['/'])
    }
  }
}
