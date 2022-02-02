import { TestBed } from '@angular/core/testing';

import { WalmartService } from './walmart.service';

describe('WalmartService', () => {
  let service: WalmartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalmartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
