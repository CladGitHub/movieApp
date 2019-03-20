import { TestBed } from '@angular/core/testing';

import { RsisearchService } from './rsisearch.service';

describe('RsisearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RsisearchService = TestBed.get(RsisearchService);
    expect(service).toBeTruthy();
  });
});
