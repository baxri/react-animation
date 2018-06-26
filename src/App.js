import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: 0,
    };
  }
  toggle() {

    if (this.state.toggle == 1) {
      this.setState({ toggle: 0, });
    } else {
      this.setState({ toggle: 1, });
    }
  }

  render() {
    return (
      <div>
        <input onClick={this.toggle} type="button" value="SHOW" />
        <ul>
          <ReactCSSTransitionGroup transitionName="fade" >
            {this.state.toggle == 1 && <h1>SHOW ME</h1>}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    )
  }
}

export default App;
