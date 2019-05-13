import React, { Component } from 'react';
import './Counter.css';

export class Counter extends Component {
    static displayName = Counter.name;

    // Setting state
    state = {
        count: 0
    }

    // Increment state
    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    // Decrement state
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div id="counterDiv">
                <h2>Counter</h2>

                <div>
                    <button onClick={this.decrement}>
                        <img src="/Images/minus1.svg" alt="subtract 1" />
                    </button>

                    <span>{this.state.count}</span>

                    <button onClick={this.increment}>
                        <img src="/Images/plus1.svg" alt="add 1" />
                    </button>
                </div>
            </div>
        )
    }
}