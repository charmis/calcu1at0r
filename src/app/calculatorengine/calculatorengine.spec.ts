import { CalculatorEngine } from './calculatorengine';

describe('Calculatorengine', () => {

  let engine;

  beforeEach(function () {
    engine = new CalculatorEngine();
  });

  it('should return 0 when calling start', () => {
    let engine = new CalculatorEngine();
    let output = engine.start();
    expect(output.displayText).toBe('0');
  });

  it('should create an instance', () => {
    expect(engine).toBeTruthy();
  });

  it('should return 2 as output for input 2', () => {
    let output = engine.processInput(2);
    expect(output.displayText).toBe('2');
  });

  it('should return 25 as output for input 2 and 5', () => {
    engine.processInput(2);
    let output = engine.processInput(5);
    expect(output.displayText).toBe('25');
  });

  it('should return 253 as output for input 2 and 5 and 3', () => {
    engine.processInput(2);
    engine.processInput(5);
    let output = engine.processInput(3);
    expect(output.displayText).toBe('253');
  });

  it('should return 0 for input 0', () => {
    let output = engine.processInput(0);
    expect(output.displayText).toBe('0');
  });

  it('should return 0 for input 0 and 0', () => {
    engine.processInput(0);
    let output = engine.processInput(0);
    expect(output.displayText).toBe('0');
  });

  it('should return 341 for input 3 and 4 and 1 and +', () => {
    engine.processInput(3);
    engine.processInput(4);
    engine.processInput(1);
    let output = engine.processInput('+');
    expect(output.displayText).toBe('341');
  });

  it('should return 2 for input 3 and + and 2', () => {
    engine.processInput(3);
    engine.processInput('+');
    let output = engine.processInput(2);
    expect(output.displayText).toBe('2');
  });

  it('should return 5 for input 3 and + and 2 and =', () => {
    engine.processInput(3);
    engine.processInput('+');
    engine.processInput(2);
    let output = engine.processInput('=');
    expect(output.displayText).toBe('5');
  });

  fit('should return 0 for input C', () => {
    engine.processInput(3);
    engine.processInput('+');
    engine.processInput(2);
    engine.processInput('=');
    let output = engine.processInput('C');
    expect(output.displayText).toBe('0');
  });
});
