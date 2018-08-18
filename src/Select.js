import React, { Component } from 'react';
import './Select.css';

class Select extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="select-root">
        <div className="select-value">Default value</div>
        <button className="select-arrow-button">
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 10l5 5 5-5z"></path>
          </svg>
        </button>
      </div>
    )
  }
}

export default Select;