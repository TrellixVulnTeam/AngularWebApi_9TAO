import { TestBed } from '@angular/core/testing';

import { ZamowieniaService } from './zamowienia.service';

describe('ZamowieniaService', () => {
  let service: ZamowieniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZamowieniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
