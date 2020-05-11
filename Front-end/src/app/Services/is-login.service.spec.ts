import { TestBed } from '@angular/core/testing';

import { IsLoginService } from './is-login.service';

describe('IsLoginService', () => {
  let service: IsLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
