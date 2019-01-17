import * as React from "react";
import { InputValidator } from "./InputValidator";
import { ValueTable } from "./ValueTable";

export interface AppProps { title: string }
export interface AppState { numberStorage: number[] }

export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { numberStorage: [] };

        this.addToStorage = this.addToStorage.bind(this);
    }

    addToStorage(value: number) {
        this.setState(state => ({ numberStorage: this.state.numberStorage.concat([value]) }));
    }

    render() {
        return (
            <div>
                <InputValidator inputDefaultValueMessage="Only numbers allowed" inputValidationRegex="^[0-9]+$" action={this.addToStorage} />
                <br></br>
                <ValueTable itemsToDisplay={this.state.numberStorage} />
            </div>
        )
    }

}