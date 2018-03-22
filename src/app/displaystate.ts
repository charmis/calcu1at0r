export class DisplayState {
    private _operator: string = null;
    private _displayText:string = null;

    get operator() {
        return this._operator;
    }

    set operator(value) {
        this._operator = value;
    }

    get displayText() {
        return this._displayText;
    }

    set displayText(value) {
        this._displayText = value;
    }
}