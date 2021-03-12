import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { ages } from 'src/app/constants/ages'
import { sizes } from 'src/app/constants/sizes'
import { DogStoreService } from 'src/app/core/services/dog-store.service'
import { sexs } from '../../constants/sexs'

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss']
})
export class DogFormComponent implements OnInit {
  constructor (private fb: FormBuilder, private DogStoreService: DogStoreService) { }

  sexArray = sexs
  ageArray = ages
  sizeArray = sizes
  breeds$ = this.DogStoreService.breeds$
  colors$ = this.DogStoreService.colors$

  dogForm = this.fb.group({
    name: ['', [Validators.required]],
    sex: ['', [Validators.required]],
    age: ['', [Validators.required]],
    size: ['', [Validators.required]],
    breed: ['', [Validators.required]],
    color: ['', [Validators.required]],
    adoption: false,
    pictures: ''
  })

  ngOnInit (): void {
    if (!this.breeds$.getValue().length) {
      this.DogStoreService.apiBreeds()
    }
    if (!this.colors$.getValue().length) {
      this.DogStoreService.apiColors()
    }
  }

  dogSubmit () {
    console.log(this.dogForm.value)
  }
}
