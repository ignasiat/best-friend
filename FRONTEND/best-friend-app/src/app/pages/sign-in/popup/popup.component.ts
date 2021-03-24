import { Component } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  constructor (
    private modalService: NgbModal
  ) {}

  close (reason) {
    this.modalService.dismissAll(reason)
  }
}
