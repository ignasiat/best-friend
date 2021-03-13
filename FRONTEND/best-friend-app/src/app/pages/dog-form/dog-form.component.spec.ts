import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FormBuilder } from '@angular/forms'

import { DogFormComponent } from './dog-form.component'

describe('DogFormComponent', () => {
  let component: DogFormComponent
  let fixture: ComponentFixture<DogFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogFormComponent], providers: [FormBuilder], imports: [HttpClientTestingModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DogFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
