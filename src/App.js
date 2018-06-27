import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  valueChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div>
        <ul>
          <label>NAME:</label>
          <input type="text" value={this.state.value} onChange={(e) => this.valueChange(e)} className={this.state.value.length > 0 ? 'ok' : 'error'} />
          <span className={this.state.value.length > 0 ? 'show' : 'hide'}>GOOD</span>
        </ul>
      </div>
    )
  }
}

export default App;
