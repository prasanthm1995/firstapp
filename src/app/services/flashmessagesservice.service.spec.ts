import { TestBed } from '@angular/core/testing';

import { FlashmessagesserviceService } from './flashmessagesservice.service';

describe('FlashmessagesserviceService', () => {
  let service: FlashmessagesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashmessagesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
