import { TestBed } from '@angular/core/testing';

import { SiteHeadersService } from './site-headers.service';

describe('SiteHeadersService', () => {
  let service: SiteHeadersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteHeadersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
