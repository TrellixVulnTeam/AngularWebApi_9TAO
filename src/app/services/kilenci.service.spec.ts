import { TestBed } from '@angular/core/testing';

import { KilenciService } from './kilenci.service';

describe('KilenciService', () => {
  let service: KilenciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KilenciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
