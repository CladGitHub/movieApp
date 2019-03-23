import { TestBed } from '@angular/core/testing';

import { GetjsongiuService } from './getjsongiu.service';

describe('GetjsongiuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetjsongiuService = TestBed.get(GetjsongiuService);
    expect(service).toBeTruthy();
  });
});
