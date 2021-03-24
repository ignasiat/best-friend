import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HttpClientTestingModule } from '@angular/common/http/testing'

import { HomeComponent } from './home.component'

import { DebugElement } from '@angular/core'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent], imports: [HttpClientTestingModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Should render a title with value "Find your best friend!"', () => {
    const bannerDe: DebugElement = fixture.debugElement
    const bannerEl: HTMLElement = bannerDe.nativeElement
    const h1 = bannerEl.querySelector('h1')
    expect(h1.textContent).toEqual('Find your best friend!')
  })
})
