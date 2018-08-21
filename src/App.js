import React, { Component } from 'react';
import './App.css';

import Select from './Select';

const customStyleOne = {
  width: `350px`,
  color: `#9a12e0`,
  borderColor: `#9a12e0`
}

const customStyleTwo = {
  width: `200px`,
  color: `#e01212`,
  borderColor: `#e01212`
}

const Icon = () => <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-plus-round-512.png" alt="icon"/>;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Default value',
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
      <div className="container">
        <div className="line">
          <h3 className="line-title">Default select</h3>
          <Select value={ value } items={ items } onChoose={ this.onChooseItem } />
        </div>

        <div className="line">
          <h3 className="line-title">Custom style select</h3>
          <Select value={ value } items={ items } onChoose={ this.onChooseItem } style={ customStyleOne } />
        </div>

        <div className="line">
          <h3 className="line-title">Custom style and icon select</h3>
          <Select value={ value } items={ items } onChoose={ this.onChooseItem } style={ customStyleTwo } icon={ Icon }/>
        </div>
      </div>
    );
  }
}

export default App;
