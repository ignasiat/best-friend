import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { DogComponent } from './dog.component'

describe('DogComponent', () => {
  let component: DogComponent
  let fixture: ComponentFixture<DogComponent>

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
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
