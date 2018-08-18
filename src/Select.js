import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="select-root">
        <div className="select-value"></div>
        <button className="select-arrow-button"></button>
      </div>
    )
  }
}

export default Select;