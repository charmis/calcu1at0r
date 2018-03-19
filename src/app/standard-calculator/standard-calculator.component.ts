import { Component, OnInit, Input } from '@angular/core';
import {CalculatorService} from '../calculator.service';

@Component({
  selector: 'app-standard-calculator',
  templateUrl: './standard-calculator.component.html',
  styleUrls: ['./standard-calculator.component.css']
})
export class StandardCalculatorComponent implements OnInit {

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
  }

  processInput(input: string) {
    this.calculatorService.processInput(input);
  }
}