import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

class App extends Component {

  increment = () => {
    this.props.dispatch({type:"INCREMENT"})
  }

  decrement = () => {
    this.props.dispatch({type:"DECREMENT"})
  }

  reset = () => {
    this.props.dispatch({type:"RESET"})
  }

  render() {
    const { count } = this.props;
    console.log('====================================');
    console.log(count);
    console.log('====================================');
    return (
      <div className="App">
        <h1>{count}</h1>
        <button onClick = {this.increment}>Increment</button>
        <button onClick = {this.decrement}>Decrement</button>
        <button onClick = {this.reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(App);
