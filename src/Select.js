import React, { Component } from 'react';
import './Select.css';

class Select extends Component {
  static defaultProps = {
    // items: []
    items: [`Item one`, `Item two`, `Item three`, `Item four`]
  }

  constructor(props) {
    super(props);

    this.state = {
      itemContainerBox: {},
      opened: false
    }
  }

  getItemsContainerBox() {
    if (!this._selectRoot) return;
    return {
      width: `${this._selectRoot.offsetWidth}px`
    }
  }

  setItemsContainerBox() {
    const itemContainerBox = this.getItemsContainerBox();
    this.setState({
      itemContainerBox
    })
  }

  openItemsContainer = () => {
    const metric = this.getItemsContainerBox();
    console.log(metric);
    this.setState(state => ({
      opened: true,
      itemContainerBox: {
        ...state.itemContainerBox,
        ...metric
      }
    }))
  }

  closeItemsContainer = () => {
    this.setState({
      opened: false
    })
  }

  // refs
  getItemsContainerRef = (node) => this._itemsContainer = node;
  getSelectRootRef = (node) => this._selectRoot = node;

  renderItemsContainer() {
    return (
      <div
        className="select-items-container"
        ref={ this.getItemsContainerRef }
        style={ this.state.itemContainerBox }>
        <ul className="select-items-list">
          { this.props.items.map(item => <li className="select-items-list-item">{item}</li>) }
        </ul>
      </div>
    )
  }

  render() {
    // const { style, value, valueComponent } = this.props;
    const { opened } = this.state;
    return (
      <React.Fragment>
        <div className="select-root" ref={ this.getSelectRootRef }>
          <div className="select-value" onClick={ this.openItemsContainer }>Default value</div>
          <button className="select-arrow-button" onClick={ this.openItemsContainer }>
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </button>
        </div>

        { opened && this.renderItemsContainer() }
      </React.Fragment>
    )
  }
}

export default Select;