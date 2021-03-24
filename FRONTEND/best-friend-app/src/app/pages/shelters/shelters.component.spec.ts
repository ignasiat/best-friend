import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { SheltersComponent } from './shelters.component'
import { MatCardModule } from '@angular/material/card'
import { DogStoreService } from 'src/app/core/services/dog-store.service'
import { userMock } from 'src/app/constants/user-mock'
import { of } from 'rxjs'
import { dogMock } from 'src/app/constants/dog-mock'

describe('SheltersComponent', () => {
  let component: SheltersComponent
  let fixture: ComponentFixture<SheltersComponent>
  let store: DogStoreService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SheltersComponent], imports: [HttpClientTestingModule, MatCardModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    store = TestBed.inject(DogStoreService)
    fixture = TestBed.createComponent(SheltersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Shoud onInit invoke next method on shelter$ when shelter$ had a length of 0', () => {
    component.shelters$.next([])

    spyOn(store, 'apiShelter').and.returnValue(of([userMock]))

    component.ngOnInit()

    const nextSpyOn = spyOn(component.shelters$, 'next')

    expect(nextSpyOn).not.toHaveBeenCalled()
  })

  it('Shoud onInit not invoke apiShelter when shelter$ had a length different of 0', () => {
    component.shelters$.next([userMock])

    const nextSpyOn = spyOn(store, 'apiShelter').and.returnValue(of([userMock]))

    component.ngOnInit()

    expect(nextSpyOn).not.toHaveBeenCalled()
  })

  it('Should onInit not invoke apiDogsAdoption if dog$ had a length different of 0', () => {
    component.dogs$.next([dogMock])

    const nextSpyOn = spyOn(store, 'apiDogsAdoption')

    component.ngOnInit()

    expect(nextSpyOn).not.toHaveBeenCalled()
  })
})
