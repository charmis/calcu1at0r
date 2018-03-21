import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should be created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));

  it('should contain a getAvailability method', inject([CalculatorService], (service: CalculatorService) => {
    expect(service.processInput).toBeDefined();
  }));

  it('should return 4 when passing 4', inject([CalculatorService], (service: CalculatorService) => {
    debugger;
    expect(service.processInput('4')).toContain('4');
  }));

});
