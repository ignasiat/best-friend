import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { User } from 'src/app/core/models/User'
import { DogStoreService } from 'src/app/core/services/dog-store.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit (): void {
    this.DogStore.userLogged$.subscribe((user) => { this.userLogged = user })
  }

  constructor (
    public DogStore: DogStoreService,
    private router: Router
  ) {}

  userLogged: User;

  logout () {
    this.DogStore.apiSignOut()
    this.router.navigate(['/'])
  }

  mobileMenu () {
    if (this.userLogged) {
      this.router.navigate(['/user', this.userLogged._id])
    } else {
      this.router.navigate(['/signin'])
    }
  }
}
