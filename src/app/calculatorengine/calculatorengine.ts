import {DisplayState} from '../displaystate';

export class CalculatorEngine {
    private input = '';
    private displayText = '0';

    private operand1 = 0;
    private operand2 = 0;
    private operator = '';

    private memory = 0;

    private result: number;

    constructor() {

    }

    start(): DisplayState {
        return this.getOutput();
    }

    processInput(inputChar: any): DisplayState {
        switch (inputChar) {
            case '0':
                if (this.input !== '0') {
                    this.input += inputChar;
                    this.setDisplayText(this.input);
                }
                break;

            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.input += inputChar;
                this.setDisplayText(this.input);
                break;

            case '+':
            case '-':
            case '*':
            case '/':
                if (this.operator === '') {
                    this.operator = inputChar;
                    this.operand1 = +this.input;
                    this.clearInput();
                    this.setDisplayText(this.operand1.toString());
                }
                else {
                    this.operand2 = +inputChar;
                }
                break;

            case '=':
                this.operand2 = +this.input;
                this.calculate();
                this.clear();
                this.setDisplayText(this.result.toString());
                break;

            case 'C':
                this.clear();
                this.setDisplayText('0');
                break;

            case 'CE':
                this.clearInput();
                this.setDisplayText('0');
                break;

            case 'M+':
                this.memory += +this.input;
                break;

            case '+-':
                if (this.input !== '') {
                    if (this.input.indexOf('-', 0) === 0) {
                        this.input = this.input.replace('-', '');
                    }
                    else {
                        this.input = '-' + this.input;
                    }
                    this.setDisplayText(this.input);
                }
                break;

            case 'M-':
                this.memory -= +this.input;
                break;

            case 'MR':
                this.setDisplayText(this.memory.toString());
                this.input = this.memory.toString();
                break;

            case 'MC':
                this.clearMemory();
                break;

            case '.':
                if (this.input.indexOf('.') === -1) {
                    this.input += inputChar;
                }
                break;
        }

        return this.getOutput();
    }

    clear(): void {
        this.clearInput();
        this.clearOperandsAndOperator();
    }

    private clearMemory(): void {
        this.memory = 0;
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
