import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StandardCalculatorComponent } from './standard-calculator/standard-calculator.component';
import {CalculatorService} from './calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    StandardCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
