import * as React from "react";

export interface InputValidatorProps { inputDefaultValueMessage: string, inputValidationRegex: string, action: Function }
export interface InputValidatorState { inputValue: string, isInputValid: boolean }

export class InputValidator extends React.Component<InputValidatorProps, InputValidatorState> {

    constructor(props: InputValidatorProps, state: InputValidatorState) {
        super(props);
        this.state = { inputValue: "", isInputValid: false };

        // This binding is necessary to make `this` work in the callback
        this.validateInput = this.validateInput.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.cleanInput = this.cleanInput.bind(this);
    }

    inputRef: React.RefObject<HTMLInputElement> = React.createRef();

    validationExpression: RegExp = new RegExp(this.props.inputValidationRegex);

    validateInput() {
        const val: string = this.inputRef.current.value;
        const isMatch = this.validationExpression.test(val);
        this.setState(state => ({ inputValue: val, isInputValid: isMatch }));
    }

    cleanInput() {
        this.inputRef.current.value = "";
        this.validateInput();
    }

    onButtonClick() {
        if (this.state.isInputValid) {
            const intVal = parseInt(this.state.inputValue);
            this.props.action(intVal);
            this.cleanInput();
        }
    }

    render() {
        return (
            <div>
                <input ref={this.inputRef} onChange={this.validateInput} placeholder={this.props.inputDefaultValueMessage} style={{ borderColor: (this.state.isInputValid ? 'green' : 'red') }}></input>
                <button onClick={this.onButtonClick} disabled={!this.state.isInputValid}  >ClickMe</button>
            </div>)
    }
}