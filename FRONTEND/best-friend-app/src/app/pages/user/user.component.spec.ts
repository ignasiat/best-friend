import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { UserComponent } from './user.component'
import { MatCardModule } from '@angular/material/card'
import { UserCardComponent } from 'src/app/components/user-card/user-card.component'
import { DogCardComponent } from 'src/app/components/dog-card/dog-card.component'
import { DogStoreService } from 'src/app/core/services/dog-store.service'
import { of } from 'rxjs'
import { userMock } from 'src/app/constants/user-mock'

describe('UserComponent', () => {
  let component: UserComponent
  let fixture: ComponentFixture<UserComponent>
  let dogStore: DogStoreService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserComponent,
        UserCardComponent,
        DogCardComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatCardModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    dogStore = TestBed.inject(DogStoreService)
    fixture = TestBed.createComponent(UserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should emit selectedshelter$ equal to userMock when component.id is equal to "userId"', () => {
    component.selectedshelter$.subscribe((answer) => { expect(answer).toEqual(userMock) })

    component.id = 'userId'

    spyOn(dogStore, 'apiShelter').and.returnValue(of([userMock]))
  })
})
