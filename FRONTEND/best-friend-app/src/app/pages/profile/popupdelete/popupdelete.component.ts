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
    public modalService: NgbModal,
    private DogStoreService: DogStoreService,
    private router: Router
  ) { }

  @Input() dogId: string
  userLogged$ = this.DogStoreService.userLogged$

  selectedDog: Dog
  ngOnInit (): void {
    this.selectedDog = this.DogStoreService.selectedDog$.getValue()
  }

  delete (): void {
    this.DogStoreService.eraseDogApi(this.dogId).subscribe((dog) => {
      this.DogStoreService.filterUserDogs(this.userLogged$.getValue()._id)
      this.modalService.dismissAll()
    })
  }
}
