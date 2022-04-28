import { TestBed } from '@angular/core/testing';

import { ManuService } from './manu.service';

describe('ManuService', () => {
  let service: ManuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
