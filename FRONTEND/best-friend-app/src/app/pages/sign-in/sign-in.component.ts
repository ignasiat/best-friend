import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { DogStoreService } from 'src/app/core/services/dog-store.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { PopupComponent } from './popup/popup.component'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor (
    private fb: FormBuilder,
    private DogStoreService: DogStoreService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  userLogged$

  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  })

  signIn () {
    this.DogStoreService.apiSignIn(this.signInForm.value).subscribe((element) => {
      this.userLogged$ = element
      if (element) {
        this.router.navigate(['/profile'])
      }
    }, () => { this.modalService.open(PopupComponent) })
  }
}
