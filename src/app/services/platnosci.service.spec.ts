import { TestBed } from '@angular/core/testing';

import { PlatnosciService } from './platnosci.service';

describe('PlatnosciService', () => {
  let service: PlatnosciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatnosciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
