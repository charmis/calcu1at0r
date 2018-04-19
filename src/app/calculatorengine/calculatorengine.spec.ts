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
    let output = engine.processInput('2');
    expect(output.displayText).toBe('2');
  });

  it('should return 25 as output for input 2 and 5', () => {
    engine.processInput('2');
    let output = engine.processInput('5');
    expect(output.displayText).toBe('25');
  });

  it('should return 253 as output for input 2 and 5 and 3', () => {
    engine.processInput('2');
    engine.processInput('5');
    let output = engine.processInput('3');
    expect(output.displayText).toBe('253');
  });

  it('should return 0 for input 0', () => {
    let output = engine.processInput('0');
    expect(output.displayText).toBe('0');
  });

  it('should return 0 for input 0 and 0', () => {
    engine.processInput('0');
    let output = engine.processInput('0');
    expect(output.displayText).toBe('0');
  });

  it('should return 341 for input 3 and 4 and 1 and +', () => {
    engine.processInput('3');
    engine.processInput('4');
    engine.processInput('1');
    let output = engine.processInput('+');
    expect(output.displayText).toBe('341');
  });

  it('should return 2 for input 3 and + and 2', () => {
    engine.processInput('3');
    engine.processInput('+');
    let output = engine.processInput('2');
    expect(output.displayText).toBe('2');
  });

  it('should return 5 for input 3 and + and 2 and =', () => {
    engine.processInput('3');
    engine.processInput('+');
    engine.processInput('2');
    let output = engine.processInput('=');
    expect(output.displayText).toBe('5');
  });

  it('should return 0 for input C', () => {
    engine.processInput('3');
    engine.processInput('+');
    engine.processInput('2');
    engine.processInput('=');
    let output = engine.processInput('C');
    expect(output.displayText).toBe('0');
  });

  it('should return 0 for input CE', () => {
    engine.processInput(3);
    let output = engine.processInput('CE');
    expect(output.displayText).toBe('0');
  });

  it('should clear only current entry for input CE - 1', () => {
    engine.processInput('3');
    engine.processInput('+');
    engine.processInput('2');
    engine.processInput('CE');
    engine.processInput('5');
    let output = engine.processInput('=');
    expect(output.displayText).toBe('8');
  });

  it('should clear only current entry for input CE - 2', () => {
    engine.processInput('3');
    engine.processInput('CE');
    engine.processInput('4');
    engine.processInput('+');
    engine.processInput('2');
    let output = engine.processInput('=');
    expect(output.displayText).toBe('6');
  });

  it('should clear only current entry for input CE - 3', () => {
    engine.processInput('3');
    engine.processInput('CE');
    engine.processInput('4');
    engine.processInput('CE');
    engine.processInput('1');
    engine.processInput('+');
    engine.processInput('2');
    let output = engine.processInput('=');
    expect(output.displayText).toBe('3');
  });

  it('should clear only current entry for input CE - 4', () => {
    engine.processInput('3');
    engine.processInput('CE');
    engine.processInput('1');
    engine.processInput('+');
    engine.processInput('2');
    engine.processInput('CE');
    engine.processInput('4');
    let output = engine.processInput('=');
    expect(output.displayText).toBe('5');
  });

  it('should clear operator after =', () => {
    engine.processInput('3');
    engine.processInput('+');
    engine.processInput('2');
    let output = engine.processInput('=');
    expect(output.operator).toBe('');
  });

  it('should return number from memory on MR', () => {
    engine.processInput('5');
    engine.processInput('M+');
    engine.processInput('C');
    engine.processInput('2');
    let output = engine.processInput('MR');
    expect(output.displayText).toBe('5');
  });

  it('should return 0 on MR after MC', () => {
    engine.processInput('5');
    engine.processInput('M+');
    engine.processInput('C');
    engine.processInput('2');
    engine.processInput('MC');
    let output = engine.processInput('MR');
    expect(output.displayText).toBe('0');
  });

  it('should return 7 from memory on MR after few M+', () => {
    engine.processInput('5');
    engine.processInput('M+');
    engine.processInput('+');
    engine.processInput('2');
    engine.processInput('M+');
    let output = engine.processInput('MR');
    expect(output.displayText).toBe('7');
  });

  it('should return 3 from memory on MR after M+ and M-', () => {
    engine.processInput('5');
    engine.processInput('M+');
    engine.processInput('+');
    engine.processInput('2');
    engine.processInput('M-');
    let output = engine.processInput('MR');
    expect(output.displayText).toBe('3');
  });

  it('should return 1500 on 1 5 0 M+ C 1 0 * MR =', () => {
    engine.processInput('1');
    engine.processInput('5');
    engine.processInput('0');
    engine.processInput('M+');
    engine.processInput('C');
    engine.processInput('1');
    engine.processInput('0');
    engine.processInput('*');
    engine.processInput('MR');
    let output = engine.processInput('=');
    expect(output.displayText).toBe('1500');
  });

  it('should return -10 on 1 0 +-', () => {
    engine.processInput('1');
    engine.processInput('0');
    let output = engine.processInput('+-');
    expect(output.displayText).toBe('-10');
  });

  it('should return 10 on 1 0 +- +-', () => {
    engine.processInput('1');
    engine.processInput('0');
    engine.processInput('+-');
    let output = engine.processInput('+-');
    expect(output.displayText).toBe('10');
  });

  it('should return 5 on 1 0 +- + 5 =', () => {
    engine.processInput('1');
    engine.processInput('0');
    engine.processInput('+-');
    engine.processInput('+');
    engine.processInput('5');
    let output = engine.processInput('=');
    expect(output.displayText).toBe('-5');
  });

  it('should return 2.5 on 1 . 5 + 1 =', () => {
    engine.processInput('1');
    engine.processInput('.');
    engine.processInput('5');
    engine.processInput('+');
    engine.processInput('1');
    let output = engine.processInput('=');
    expect(output.displayText).toBe('2.5');
  });

  it('should return 2.5 on 1 . 5 + 1 . 5 =', () => {
    engine.processInput('1');
    engine.processInput('.');
    engine.processInput('5');
    engine.processInput('+');
    engine.processInput('1');
    engine.processInput('.');
    engine.processInput('5');
    let output = engine.processInput('=');
    expect(output.displayText).toBe('3');
  });

  it('should return 0.5 on . . 5', () => {
    engine.processInput('.');
    engine.processInput('.');
    let output = engine.processInput('5');
    expect(output.displayText).toBe('.5');
  });

});
