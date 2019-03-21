import { TestBed } from '@angular/core/testing';

import { SearchRGService } from './search-rg.service';

describe('SearchRGService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchRGService = TestBed.get(SearchRGService);
    expect(service).toBeTruthy();
  });
});
