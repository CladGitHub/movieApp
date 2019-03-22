import { TestBed } from '@angular/core/testing';

import { AudioSearchService } from './audio-search.service';

describe('AudioSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioSearchService = TestBed.get(AudioSearchService);
    expect(service).toBeTruthy();
  });
});
