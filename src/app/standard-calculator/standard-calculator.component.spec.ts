import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCalculatorComponent } from './standard-calculator.component';
import { CalculatorService } from '../calculator.service';

describe('StandardCalculatorComponent', () => {
  let component: StandardCalculatorComponent;
  let fixture: ComponentFixture<StandardCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StandardCalculatorComponent],
      providers: [CalculatorService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
