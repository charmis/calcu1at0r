import { Component, OnInit, Input } from '@angular/core';
import {CalculatorService} from '../calculator.service';
import {DisplayState} from '../displaystate';

@Component({
  selector: 'app-standard-calculator',
  templateUrl: './standard-calculator.component.html',
  styleUrls: ['./standard-calculator.component.css']
})
export class StandardCalculatorComponent implements OnInit {
 
  calcDisplayState:DisplayState;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
  }

  processInput(input: any) {
    this.calcDisplayState = this.calculatorService.processInput(input);
  }
}
