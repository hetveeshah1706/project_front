import { TestBed } from '@angular/core/testing';

import { ExamscheduleService } from './examschedule.service';

describe('ExamscheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamscheduleService = TestBed.get(ExamscheduleService);
    expect(service).toBeTruthy();
  });
});
