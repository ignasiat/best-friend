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
  constructor (private fb: FormBuilder, public DogStoreService: DogStoreService) { }

  sexArray = sexs
  ageArray = ages
  sizeArray = sizes
  breeds$ = this.DogStoreService.breeds$
  colors$ = this.DogStoreService.colors$
  shelters$ = this.DogStoreService.shelters$

  dogForm = this.fb.group({
    name: ['', [Validators.required]],
    shelter: ['', [Validators.required]],
    description: ['', [Validators.required]],
    sex: ['', [Validators.required]],
    age: ['', [Validators.required]],
    size: ['', [Validators.required]],
    breed: ['', [Validators.required]],
    color: ['', [Validators.required]],
    adoption: true,
    imagesURL: []
  })

  ngOnInit (): void {
    if (!this.breeds$.getValue().length) {
      this.DogStoreService.apiBreeds()
    }
    if (!this.colors$.getValue().length) {
      this.DogStoreService.apiColors()
    }
    if (!this.shelters$.getValue().length) {
      this.DogStoreService.apiShelter()
    }
  }

  dogSubmit () {
    this.DogStoreService.addApiDogs(this.dogForm.value)
    this.dogForm.reset()
  }

  fileChange (event) {
    const newArray: String[] = []
    Object.keys(event.target.files).forEach(element => {
      newArray.push(event.target.files[element].name)
    })
    this.dogForm.patchValue({ imagesURL: newArray })
  }
}
