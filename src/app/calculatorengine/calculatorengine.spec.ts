import { CalculatorEngine } from './calculatorengine';

fdescribe('Calculatorengine', () => {

  let engine = new CalculatorEngine();

  beforeEach(function () {
    engine.clear();
  });

  fit('should create an instance', () => {
    expect(engine).toBeTruthy();
  });

  fit('should return 2 as output for input 2', () => {
    let output = engine.processInput(2);
    expect(output).toBe('2');
  });

  fit('should return 25 as output for input 2 and 5', () => {
    engine.processInput(2);
    let output = engine.processInput(5);
    expect(output).toBe('25');
  });

  fit('should return 253 as output for input 2 and 5 and 3', () => {
    engine.processInput(2);
    engine.processInput(5);
    let output = engine.processInput(3);
    expect(output).toBe('253');
  });

  fit('should return 0 for input 0', () => {
    let output = engine.processInput(0);
    expect(output).toBe('0');
  });

  fit('should return 0 for input 0 and 0', () => {
    engine.processInput(0);
    let output = engine.processInput(0);
    expect(output).toBe('0');
  });

  fit('should return 341 for input 3 and 4 and 1 and +', () => {
    engine.processInput(3);
    engine.processInput(4);
    engine.processInput(1);
    let output = engine.processInput('+');
    expect(output).toBe('341');
  });

  fit('should return 2 for input 3 and + and 2', () => {
    debugger;
    engine.processInput(3);
    engine.processInput('+');
    let output = engine.processInput(2);
    expect(output).toBe('2');
  });

  fit('should return 5 for input 3 and + and 2 and =', () => {
    debugger;
    engine.processInput(3);
    engine.processInput('+');
    engine.processInput(2);
    let output = engine.processInput('=');
    expect(output).toBe('5');
  });

});
