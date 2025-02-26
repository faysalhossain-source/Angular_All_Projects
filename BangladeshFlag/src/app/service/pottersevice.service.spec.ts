import { TestBed } from '@angular/core/testing';

import { PotterseviceService } from './pottersevice.service';

describe('PotterseviceService', () => {
  let service: PotterseviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotterseviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
