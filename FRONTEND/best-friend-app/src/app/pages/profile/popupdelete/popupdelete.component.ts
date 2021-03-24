import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Dog } from 'src/app/core/models/Dog'
import { DogStoreService } from 'src/app/core/services/dog-store.service'
@Component({
  selector: 'app-popupdelete',
  templateUrl: './popupdelete.component.html',
  styleUrls: ['./popupdelete.component.scss']
})
export class PopupdeleteComponent implements OnInit {
  constructor (
    private modalService: NgbModal,
    private DogStore: DogStoreService,
    private router: Router
  ) { }

  @Input() dogId: string
  userLogged$ = this.DogStore.userLogged$

  selectedDog: Dog
  ngOnInit (): void {
    this.selectedDog = this.DogStore.selectedDog$.getValue()
  }

  delete (): void {
    this.DogStore.eraseDogApi(this.dogId).subscribe((dog) => {
      this.DogStore.filterUserDogs(this.userLogged$.getValue()._id)
      this.modalService.dismissAll()
    })
  }

  close (): void {
    this.modalService.dismissAll()
  }
}
