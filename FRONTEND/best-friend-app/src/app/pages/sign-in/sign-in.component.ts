import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { DogStoreService } from 'src/app/core/services/dog-store.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor (private fb: FormBuilder, private DogStoreService: DogStoreService, private router: Router) { }

  userLogged$

  ngOnInit (): void {
  }

  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  })

  signIn () {
    this.DogStoreService.apiSignIn(this.signInForm.value).subscribe((element) => {
      this.userLogged$ = element
      if (element) {
        this.router.navigate(['/user/', element._id])
      }
    })
  }
}
