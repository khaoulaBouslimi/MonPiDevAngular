import { TestBed } from '@angular/core/testing';

import { TrainingsessionService } from './trainingsession.service';

describe('TrainingsessionService', () => {
  let service: TrainingsessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingsessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
