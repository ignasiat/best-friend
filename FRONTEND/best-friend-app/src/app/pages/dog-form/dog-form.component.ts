import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ages } from 'src/app/constants/ages'
import { sizes } from 'src/app/constants/sizes'
import { DogStoreService } from 'src/app/core/services/dog-store.service'
import { sexs } from '../../constants/sexs'

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss']
})
export class DogFormComponent {
  constructor (
    private fb: FormBuilder,
    public DogStoreService: DogStoreService,
    private router: Router
  ) {}

  sexArray = sexs
  ageArray = ages
  sizeArray = sizes
  breeds$ = this.DogStoreService.apiBreeds()
  colors$ = this.DogStoreService.apiColors()
  shelters$ = this.DogStoreService.apiShelter()
  filesArray: string[] = []

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

  dogSubmit () {
    this.DogStoreService.addApiDogs(this.dogForm.value).subscribe((newDog) => this.router.navigate(['/dog', newDog._id]))
  }

  fileChange (event) {
    const newArray: string[] = []
    Object.keys(event.target.files).forEach(element => {
      newArray.push(event.target.files[element].name)
    })
    this.dogForm.patchValue({ imagesURL: newArray })
    this.filesArray = newArray
  }
}
