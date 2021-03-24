import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { ages } from 'src/app/constants/ages'
import { sizes } from 'src/app/constants/sizes'
import { Dog } from 'src/app/core/models/Dog'
import { DogStoreService } from 'src/app/core/services/dog-store.service'
import { sexs } from '../../constants/sexs'

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss']
})

export class DogFormComponent implements OnInit {
  constructor (
    private fb: FormBuilder,
    public DogStore: DogStoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  id = this.activatedRoute.snapshot.params.dogId

  sexArray = sexs
  ageArray = ages
  sizeArray = sizes
  breeds$ = this.DogStore.apiBreeds()
  colors$ = this.DogStore.apiColors()
  shelters$ = this.DogStore.apiShelter()
  filesArray: string[] = []

  selectedDog: Dog

  dogForm = this.fb.group({
    _id: [''],
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
    const dogId = this.dogForm.value._id
    const dataSend = this.dogForm.value
    delete dataSend._id
    dataSend.owner = null
    if (dogId === '') {
      this.DogStore.addApiDogs(dataSend).subscribe((newDog) => this.router.navigate(['/dog', newDog._id]))
    } else {
      this.DogStore.updateDogApi(dogId, dataSend).subscribe((updatedDog) => { this.DogStore.filterAdoptionDogs(); this.router.navigate(['/dog', updatedDog._id]) })
    }
  }

  fileChange (event) {
    const newArray: string[] = []
    Object.keys(event.target.files).forEach(element => {
      newArray.push(event.target.files[element].name)
    })
    this.dogForm.patchValue({ imagesURL: newArray })
    this.filesArray = newArray
  }

  ngOnInit (): void {
    if (this.id !== 1) {
      this.DogStore.getSelectedDog(this.id)
      this.DogStore.selectedDog$.subscribe((dog) => {
        this.selectedDog = dog
        if (dog) {
          this.dogForm.patchValue(dog)
          this.dogForm.patchValue({
            shelter: dog.shelter._id,
            color: dog.color._id,
            breed: dog.breed._id,
            imagesURL: dog.photosURL
          })
          this.filesArray = dog.photosURL
        }
      })
    }
  }
}
