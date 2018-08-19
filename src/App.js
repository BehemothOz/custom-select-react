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
  constructor(props) {
    super(props);

    this.state = {
      value: null,
      items: [`Item one`, `Item two`, `Item three`, `Item four`]
    }
  }

  onChooseItem = (item) => {
    this.setState({
      value: item
    })
  }

  render() {
    const { value, items } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <div style={ divStyle }>
          <Select value={ value } items={ items } onChoose={ this.onChooseItem }/>
        </div>

      </div>
    );
  }
}

export default App;
