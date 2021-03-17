import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { DogStoreService } from 'src/app/core/services/dog-store.service'
import { filter, switchMap, tap } from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  constructor (
    private DogStoreService: DogStoreService,
    private router: Router
  ) {}

  ourDogs$ = new Observable();
  isLogged$ = new BehaviorSubject(null);

  userLogged$ = this.DogStoreService.userLogged$
    .pipe(
      tap(isLogged => !isLogged && this.router.navigate(['/'])),
      tap(user => {
        if (user) this.isLogged$.next(user._id)
      })
    )

  ngOnInit () {
    this.ourDogs$ = this.isLogged$
      .pipe(
        filter(event => !!event),
        switchMap((id: string) => this.DogStoreService.apiDogsUser(id))
      )
  }
}
