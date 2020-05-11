import { TestBed } from '@angular/core/testing';

import { EnregestementServiceService } from './enregestement-service.service';

describe('EnregestementServiceService', () => {
  let service: EnregestementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnregestementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
