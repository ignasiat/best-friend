import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HttpClientTestingModule } from '@angular/common/http/testing'

import { HomeComponent } from './home.component'

import { dogMock } from '../../constants/dog-mock'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent], imports: [HttpClientTestingModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Should not call apiDogs onInit when dogs$ has values', () => {
    component.dogs$.next([dogMock])
    const apiDogsSpy = spyOn(component.DogStoreService, 'apiDogs')

    component.ngOnInit()

    expect(apiDogsSpy).not.toHaveBeenCalled()
  })
})
