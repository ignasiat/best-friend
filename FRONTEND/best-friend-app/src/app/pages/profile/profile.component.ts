import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { DogStoreService } from 'src/app/core/services/dog-store.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { PopupdeleteComponent } from './popupdelete/popupdelete.component'
import { BehaviorSubject } from 'rxjs'
import { Dog } from 'src/app/core/models/Dog'
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  constructor (
    private DogStore: DogStoreService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  dogs$: BehaviorSubject<Dog[]> = this.DogStore.dogs$
  dogsUser$: BehaviorSubject<Dog[]> = this.DogStore.dogsUser$
  dogsUserForAdoption: Dog[]
  dogsUserAdopted: Dog[]
  dogsOwner: Dog[]
  isLogged$ = new BehaviorSubject(null);

  userLogged$ = this.DogStore.userLogged$
    .pipe(
      tap(isLogged => !isLogged && this.router.navigate(['/'])),
      tap(user => {
        if (user) {
          this.DogStore.filterUserDogs(user._id)
          this.isLogged$.next(user)
          this.filter(user._id)
        }
      })
    )

  ngOnInit () {
    if (!this.dogs$.getValue().length) {
      this.DogStore.apiDogsAdoption().subscribe(() => {
        const user = this.isLogged$.getValue()
        if (user) {
          this.DogStore.filterUserDogs(user._id)
          this.filter(user._id)
        }
      })
    }
  }

  delete (dogId: string) {
    const modalRef = this.modalService.open(PopupdeleteComponent)
    modalRef.componentInstance.dogId = dogId
    modalRef.dismissed.subscribe(() => {
      this.filter(this.isLogged$.getValue()._id)
      this.DogStore.filterAdoptionDogs()
    })
  }

  filter (userId: string): void {
    this.dogsUserForAdoption = this.dogsUser$.getValue().filter((dog) => dog.adoption)
    this.dogsUserAdopted = this.dogsUser$.getValue().filter((dog) => !dog.adoption)
    this.dogsOwner = this.dogs$.getValue().filter((dog) => dog.owner?._id === userId)
  }

  adoption (dog: Dog, adoption: boolean) {
    const updatedDog = { ...dog, adoption, owner: null }
    const dogId = dog._id
    delete updatedDog._id
    this.DogStore.updateDogApi(dogId, updatedDog).subscribe(() => {
      const user = this.isLogged$.getValue()
      if (user) {
        this.DogStore.filterUserDogs(user._id)
        this.filter(user._id)
      }
    })
  }
}
