import { TestBed } from '@angular/core/testing';

import { CvmolinafacundoService } from './cvmolinafacundo.service';

describe('CvmolinafacundoService', () => {
  let service: CvmolinafacundoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvmolinafacundoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
