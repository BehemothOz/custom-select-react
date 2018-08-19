import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Select from './Select';

const divStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p><br />

        <div style={divStyle}>
          {/* style / items */}
          <Select />
        </div>

      </div>
    );
  }
}

export default App;
