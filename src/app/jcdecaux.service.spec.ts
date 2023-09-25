import { TestBed } from '@angular/core/testing';

import { JcdecauxService } from './jcdecaux.service';

describe('JcdecauxService', () => {
  let service: JcdecauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JcdecauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
