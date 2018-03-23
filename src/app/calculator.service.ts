import { Injectable } from '@angular/core';
import {CalculatorEngine} from './calculatorengine/calculatorengine';
import {DisplayState} from './displaystate';

@Injectable()
export class CalculatorService {
  private calcEngine: CalculatorEngine;

  constructor() {
    this.calcEngine = new CalculatorEngine();
  }

  start(): DisplayState {
    return this.calcEngine.start();
  }

  processInput(input: any): DisplayState {
    return this.calcEngine.processInput(input);
  }
}
