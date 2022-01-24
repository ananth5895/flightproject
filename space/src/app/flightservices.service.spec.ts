import { TestBed } from '@angular/core/testing';

import { FlightservicesService } from './flightservices.service';

describe('FlightservicesService', () => {
  let service: FlightservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
