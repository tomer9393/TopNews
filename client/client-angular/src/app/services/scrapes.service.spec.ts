import { TestBed } from '@angular/core/testing';

import { ScrapesService } from './scrapes.service';

describe('ScrapesService', () => {
  let service: ScrapesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrapesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
