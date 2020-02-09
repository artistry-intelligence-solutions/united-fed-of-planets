import { TestBed } from '@angular/core/testing';

import { StarDateService } from './star-date.service';

describe('StarDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarDateService = TestBed.get(StarDateService);
    expect(service).toBeTruthy();
  });
});
