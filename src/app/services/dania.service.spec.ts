import { TestBed } from '@angular/core/testing';

import { DaniaService } from './dania.service';

describe('DaniaService', () => {
  let service: DaniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
