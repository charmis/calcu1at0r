import { Injectable } from '@angular/core';
import {CalculatorEngine} from './calculatorengine/calculatorengine';

@Injectable()
export class CalculatorService {
  private calcEngine: CalculatorEngine;

  constructor() {
    this.calcEngine = new CalculatorEngine();
  }

  processInput(input: any): string {
    return this.calcEngine.processInput(input);
  }
}
