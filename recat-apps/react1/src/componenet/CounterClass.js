import React, { Component } from 'react';
class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    increment=()=> {
        this.setState((prevState)=>({
            counter: prevState.counter + 1
        }))
    }
    Reset=()=>{
        this.setState({
            counter: 0
        })
    }
    Decrement=()=>{
        this.setState({
            counter: this.state.counter - 1
        })
    }
   incrementthree=()=>{
       this.increment();
       this.increment();
       this.increment();

    }
    render() {
        return (
            <>
                <h1 style={{ fontSize: '10em' }}>{this.state.counter}</h1>
                <button onClick={this.increment}>Counter button</button>
                <button onClick={this.incrementthree}>333Counter button</button>
                <button onClick={this.Decrement}>Decrement</button>
                <button onClick={this.Reset}>Reset</button>
            </>
        )
    }
}
export default CounterClass;