import { TestBed } from '@angular/core/testing'

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { DogService } from './dog.service'

import { dogMock } from '../../constants/dog-mock'

describe('DogService', () => {
  let service: DogService
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [DogService] })
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(DogService)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should make a post request', () => {
    service.addDog(dogMock).subscribe((answer) => answer)

    const req = httpTestingController.expectOne('http://localhost:5000/api/dog')

    expect(req.request.method).toEqual('POST')

    req.flush(dogMock)
  })
})
