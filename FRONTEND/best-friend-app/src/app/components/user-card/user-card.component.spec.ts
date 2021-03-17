import { ComponentFixture, TestBed } from '@angular/core/testing'
import { userMock } from 'src/app/constants/user-mock'

import { UserCardComponent } from './user-card.component'

describe('UserCardComponent', () => {
  let component: UserCardComponent
  let fixture: ComponentFixture<UserCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent)
    component = fixture.componentInstance
    component.user = userMock
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
