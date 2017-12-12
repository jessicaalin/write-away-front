import { TestBed, inject } from '@angular/core/testing';

import { DocApiService } from './doc-api.service';

describe('DocApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocApiService]
    });
  });

  it('should be created', inject([DocApiService], (service: DocApiService) => {
    expect(service).toBeTruthy();
  }));
});
