import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatMenuModule } from '@angular/material/menu'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { HeaderComponent } from './header.component'
import { Router } from '@angular/router'
import { userMock } from 'src/app/constants/user-mock'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        MatMenuModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    router = TestBed.inject(Router)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Should navigate to "/" when logout', () => {
    spyOn(component.DogStore, 'apiSignOut').and.returnValue(null)

    const navigateSpy = spyOn(router, 'navigate')

    component.logout()

    expect(navigateSpy).toHaveBeenCalledOnceWith(['/'])
  })

  it('Should navigate to "/user/userId" when userLogged is truthy and mobilemenu is invoked', () => {
    component.userLogged = userMock

    const navigateSpy = spyOn(router, 'navigate')

    component.mobileMenu()

    expect(navigateSpy).toHaveBeenCalledOnceWith(['/user', 'userId'])
  })

  it('Should navigate to "/signin" when userLogged is falsy and mobilemenu is invoked', () => {
    component.userLogged = null

    const navigateSpy = spyOn(router, 'navigate')

    component.mobileMenu()

    expect(navigateSpy).toHaveBeenCalledOnceWith(['/signin'])
  })
})
