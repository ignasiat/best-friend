import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs'
import { dogMock } from 'src/app/constants/dog-mock'

import { DogComponent } from './dog.component'

describe('DogComponent', () => {
  let component: DogComponent
  let fixture: ComponentFixture<DogComponent>
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogComponent], imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    router = TestBed.inject(Router)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Should navigate to "/profile" when adopt is invoked', () => {
    spyOn(component.DogStore, 'updateDogApi').and.returnValue(of(null))

    const navigateSpy = spyOn(router, 'navigate')

    component.adopt(dogMock, 'userId')

    expect(navigateSpy).toHaveBeenCalledOnceWith(['/profile'])
  })
})
