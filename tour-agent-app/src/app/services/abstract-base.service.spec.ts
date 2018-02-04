import { TestBed, inject } from '@angular/core/testing';

import { AbstractBaseService } from './abstract-base.service';

describe('AbstractBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractBaseService]
    });
  });

  it('should be created', inject([AbstractBaseService], (service: AbstractBaseService) => {
    expect(service).toBeTruthy();
  }));
});
