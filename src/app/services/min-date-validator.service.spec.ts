import { TestBed } from '@angular/core/testing';

import { MinDateValidatorService } from './min-date-validator.service';

describe('MinDateValidatorService', () => {
  let service: MinDateValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinDateValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
