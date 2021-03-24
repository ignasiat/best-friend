import { TestBed } from '@angular/core/testing'

import { HttpClientTestingModule } from '@angular/common/http/testing'

import { DogService } from './dog.service'

import { dogMock } from '../../constants/dog-mock'
import { signInMock } from 'src/app/constants/sign-in-mock'
import { userMock } from 'src/app/constants/user-mock'
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs'

describe('DogService get', () => {
  let service: DogService
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [{ provide: HttpClient, useValue: httpClientSpy }] })

    service = TestBed.inject(DogService)
  })

  afterEach(() => {

  })

  it('When signOut is invoked should make a get request', () => {
    httpClientSpy.get.and.returnValue(of(null))
    service.signOut().subscribe((answer) => {
      expect(httpClientSpy.get.calls.count()).toBe(1)
    })
  })
})

describe('DogService post', () => {
  let service: DogService
  let httpClientSpy: { post: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [{ provide: HttpClient, useValue: httpClientSpy }] })

    service = TestBed.inject(DogService)
  })

  afterEach(() => {

  })
  it('When addDog is invoked should make a post request', () => {
    httpClientSpy.post.and.returnValue(of(dogMock))
    service.addDog(dogMock).subscribe((answer) => {
      expect(httpClientSpy.post.calls.count()).toBe(1)
    })
  })

  it('When signIn is invoked should make a post request', () => {
    httpClientSpy.post.and.returnValue(of(userMock))
    service.signIn(signInMock).subscribe((answer) => {
      expect(httpClientSpy.post.calls.count()).toBe(1)
    })
  })
})

describe('DogService put', () => {
  let service: DogService
  let httpClientSpy: { put: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['put'])
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [{ provide: HttpClient, useValue: httpClientSpy }] })

    service = TestBed.inject(DogService)
  })

  afterEach(() => {

  })

  it('When updateApiDog is invoked should make a put request', () => {
    httpClientSpy.put.and.returnValue(of(dogMock))
    service.updateApiDog('dogId', dogMock).subscribe((answer) => {
      expect(httpClientSpy.put.calls.count()).toBe(1)
    })
  })
})

describe('DogService put', () => {
  let service: DogService
  let httpClientSpy: { delete: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['delete'])
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [{ provide: HttpClient, useValue: httpClientSpy }] })

    service = TestBed.inject(DogService)
  })

  afterEach(() => {

  })

  it('When deleteApiDog is invoked should make a delete request', () => {
    httpClientSpy.delete.and.returnValue(of([dogMock]))
    service.deleteApiDog('dogId').subscribe((answer) => {
      expect(httpClientSpy.delete.calls.count()).toBe(1)
    })
  })
})
