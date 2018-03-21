import { Component, OnInit, Input } from '@angular/core';
import {CalculatorService} from '../calculator.service';

@Component({
  selector: 'app-standard-calculator',
  templateUrl: './standard-calculator.component.html',
  styleUrls: ['./standard-calculator.component.css']
})
export class StandardCalculatorComponent implements OnInit {

  output: string;
  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
  }

  processInput(input: any) {
    this.output = this.calculatorService.processInput(input);
  }
}
