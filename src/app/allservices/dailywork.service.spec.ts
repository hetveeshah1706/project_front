import { TestBed, inject } from '@angular/core/testing';

import { DailyworkService } from './dailywork.service';

describe('DailyworkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyworkService]
    });
  });

  it('should be created', inject([DailyworkService], (service: DailyworkService) => {
    expect(service).toBeTruthy();
  }));
});
