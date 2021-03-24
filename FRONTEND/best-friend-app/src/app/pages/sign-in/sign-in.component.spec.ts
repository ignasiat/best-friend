import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { SignInComponent } from './sign-in.component'
import { DogStoreService } from 'src/app/core/services/dog-store.service'
import { Router, RouterModule } from '@angular/router'
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { userMock } from 'src/app/constants/user-mock'
import { of, throwError } from 'rxjs'
import { ProfileComponent } from '../profile/profile.component'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('SignInComponent', () => {
  let component: SignInComponent
  let fixture: ComponentFixture<SignInComponent>
  let router: Router
  let service: DogStoreService
  let ngbModal: NgbModal

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        RouterTestingModule.withRoutes([{ path: 'profile', component: ProfileComponent }]),
        NgbModule,
        MatInputModule,
        BrowserAnimationsModule],
      declarations: [SignInComponent],
      providers: [DogStoreService]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent)
    service = TestBed.inject(DogStoreService)
    router = TestBed.inject(Router)
    ngbModal = TestBed.inject(NgbModal)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Should navigate to call apiSignIn', () => {
    const spy = spyOn(service, 'apiSignIn').and.returnValue(of(userMock))

    component.signIn()

    expect(spy).toHaveBeenCalled()
  })

  it('Should navigate to /profile when signin is sucess', () => {
    spyOn(service, 'apiSignIn').and.returnValue(of(userMock))

    const nextSpyOn = spyOn(router, 'navigate')

    component.signIn()

    expect(nextSpyOn).toHaveBeenCalledWith(['/profile'])
  })

  it('Should not navigate to /profile when user is falsy', () => {
    spyOn(service, 'apiSignIn').and.returnValue(of(null))

    const nextSpyOn = spyOn(router, 'navigate')

    component.signIn()

    expect(nextSpyOn).not.toHaveBeenCalledWith(['/profile'])
  })

  it('Should open the modal window when apiSign throw an error', () => {
    spyOn(service, 'apiSignIn').and.returnValue(throwError('Error'))

    const nextSpyOn = spyOn(ngbModal, 'open')

    component.signIn()

    expect(nextSpyOn).toHaveBeenCalled()
  })
})
