import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HttpClientTestingModule } from '@angular/common/http/testing'

import { DogsComponent } from './dogs.component'

describe('DogsComponent', () => {
  let component: DogsComponent
  let fixture: ComponentFixture<DogsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DogsComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
