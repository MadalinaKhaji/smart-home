import { TestBed } from '@angular/core/testing';

import { SeluxitService } from './seluxit.service';

describe('SeluxitService', () => {
  let service: SeluxitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeluxitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
