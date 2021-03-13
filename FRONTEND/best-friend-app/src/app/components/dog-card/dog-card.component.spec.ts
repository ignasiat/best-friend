import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DogCardComponent } from './dog-card.component'

import { dogMock } from '../../constants/dog-mock'

describe('DogCardComponent', () => {
  let component: DogCardComponent
  let fixture: ComponentFixture<DogCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogCardComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DogCardComponent)
    component = fixture.componentInstance
    component.dog = dogMock
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
