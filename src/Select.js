import React, { Component } from 'react';
import './Select.css';

class Select extends Component {
  static defaultProps = {
    items: [1, 2, 3]
  }

  constructor(props) {
    super(props);
  }

  renderItemsContainer() {
    return (
      <div className="select-items-container">
        <ul className="select-items-list">
          { this.props.items.map(item => <li className="select-items-list-item">{item}</li>) }
        </ul>
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div className="select-root">
          <div className="select-value">Default value</div>
          <button className="select-arrow-button">
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </button>
        </div>

        { this.renderItemsContainer() }
      </React.Fragment>
    )
  }
}

export default Select;