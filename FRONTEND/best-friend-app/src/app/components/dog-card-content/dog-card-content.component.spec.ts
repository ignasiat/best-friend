import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DogCardContentComponent } from './dog-card-content.component'

import { dogMock } from '../../constants/dog-mock'

describe('DogCardContentComponent', () => {
  let component: DogCardContentComponent
  let fixture: ComponentFixture<DogCardContentComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogCardContentComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DogCardContentComponent)
    component = fixture.componentInstance
    component.dog = dogMock
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
