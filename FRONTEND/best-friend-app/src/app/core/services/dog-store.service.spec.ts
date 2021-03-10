import { TestBed } from '@angular/core/testing';

import { DogStoreService } from './dog-store.service';

describe('DogStoreService', () => {
  let service: DogStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
