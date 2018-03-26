import {DisplayState} from '../displaystate';

export class CalculatorEngine {
    private input = '';
    private displayText = '0';

    private operand1 = 0;
    private operand2 = 0;
    private operator = '';

    private ZERO = 0;
    private FLAG_ONE = 1;
    private FLAG_TWO = 2;
    private FLAG_THREE = 4;
    private FLAG_FOUR = 8;
    private FLAG_FIVE = 16;
    private FLAG_SIX = 32;
    private FLAG_SEVEN = 64;
    private FLAG_EIGHT = 128;
    private FLAG_NINE = 256;

    private FLAG_PLUS = 512;
    private FLAG_MINUS = 1024;
    private FLAG_MULTIPLY = 2048;
    private FLAG_DIVISON = 4096;

    private numbermask = this.FLAG_ONE | this.FLAG_TWO | this.FLAG_THREE | this.FLAG_FOUR | this.FLAG_FIVE | this.FLAG_SIX | this.FLAG_SEVEN | this.FLAG_EIGHT | this.FLAG_NINE;
    private operatormask = this.FLAG_PLUS | this.FLAG_MINUS | this.FLAG_MULTIPLY | this.FLAG_DIVISON;

    private result: number;

    constructor() {

    }

    start(): DisplayState {
        return this.getOutput();
    }

    processInput(inputChar: any): DisplayState {
        if (inputChar == this.ZERO) {        
            if (this.input !== '0') {
                this.input += inputChar;
                this.setDisplayText(this.input);
            }
        }
        else if (inputChar & this.numbermask) {
            this.input += inputChar;
            this.setDisplayText(this.input);
        }
        else if (inputChar === '+' || inputChar === '-' || inputChar === '*' || inputChar === '/') {
            if (this.operator === '') {
                this.operator = inputChar;
                this.operand1 = +this.input;
                this.clearInput();
                this.setDisplayText(this.operand1.toString());
            }
            else {
                this.operand2 = +inputChar;
            }
        }
        else if (inputChar === '=') {
            this.operand2 = +this.input;
            this.calculate();

            this.setDisplayText(this.result.toString());
        }

        return this.getOutput();
    }

    clear(): void {
        this.clearInput();
        this.clearOperandsAndOperator();
    }

    private clearOperandsAndOperator(): void {
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = '';
    }

    private clearInput(): void {
        this.input = '';
    }

    private getOutput(): DisplayState {
        let displayState = new DisplayState();
        displayState.displayText = this.displayText;
        displayState.operator = this.operator;

        return displayState;
    }

    private setDisplayText(text: string) {
        this.displayText = text;
    }

    private calculate() {
        switch (this.operator) {
            case '+':
                this.result = this.operand1 + this.operand2;
                break;

            case '-':
                this.result = this.operand1 - this.operand2;
                break;

            case '*':
                this.result = this.operand1 * this.operand2;
                break;

            case '/':
                this.result = this.operand1 / this.operand2;
                break;
        }
    }
}
