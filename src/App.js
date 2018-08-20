import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Select from './Select';

const divStyle = {
  width: '100%',
  height: '160vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: `center`
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Select value',
      items: [`Item one`, `Item two`, `Item three`, `Item four`]
    }
  }

  onChooseItem = (item) => {
    console.log(item)
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
