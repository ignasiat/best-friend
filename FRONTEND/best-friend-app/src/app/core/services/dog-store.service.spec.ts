import { TestBed } from '@angular/core/testing'

import { HttpClientTestingModule } from '@angular/common/http/testing'

import { DogStoreService } from './dog-store.service'

describe('DogStoreService', () => {
  let service: DogStoreService

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
    service = TestBed.inject(DogStoreService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
