import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Select.css';

import IconSelect from './IconSelect';

class Select extends Component {
  static defaultProps = {
    value: 'Default value',
    items: [],
    icon: IconSelect
  }

  static propTypes = {
    items: PropTypes.array,
    value: PropTypes.string,
    style: PropTypes.object,
    onChoose: PropTypes.func
  }

  state = {
    itemContainerBox: {},
    opened: false
  }

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleWindowScroll)
  }

  componentWillUnmount() {
    window.addEventListener(`scroll`, this.handleWindowScroll)
  }

  handleWindowScroll = () => {
    if ( this.state.opened ) this.closeItemsContainer();
  }

  getItemsContainerBox() {
    if (!this._selectRoot || !this._itemsContainer) return;

    const selectRootBoundary = this._selectRoot.getBoundingClientRect();
    const left = selectRootBoundary.left;
    const bottom = selectRootBoundary.top + this._itemsContainer.offsetHeight;
    const top =
      bottom > window.innerHeight
        ? selectRootBoundary.bottom - this._itemsContainer.offsetHeight
        : selectRootBoundary.top;

    return {
      width: `${this._selectRoot.offsetWidth}px`,
      top: `${top}px`,
      left: `${left}px`
    }
  }

  setItemsContainerBox = () => { // ?
    const itemContainerBox = this.getItemsContainerBox();
    this.setState({ itemContainerBox });
  }

  openItemsContainer = () => {
    this.setState({ opened: true }, this.setItemsContainerBox );
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
    const { items, value, onChoose} = this.props;
    return (
      <div className="select-items-container-wrapper"
        onClick={ this.closeItemsContainer }>
        <div
          className="select-items-container"
          ref={ this.getItemsContainerRef }
          style={ this.state.itemContainerBox }>
          <ul className="select-items-list">
            { items.map((item, i) =>
                <li
                  key={ i }
                  className={`select-items-list-item ${ value === item ? `active` : `` }`}
                  onClick={() => onChoose(item) }>{ item }
                </li>)
            }
          </ul>
        </div>
      </div>
    )
  }

  render() {
    // const { style, value, valueComponent } = this.props;
    const { value, style, icon: IconSelect } = this.props;
    const { opened } = this.state;
    return (
      <React.Fragment>
        <div className="select-root" style={style} ref={ this.getSelectRootRef }>
          <div className="select-value" onClick={ this.openItemsContainer }>{ value }</div>
          <button className="select-arrow-button" onClick={ this.openItemsContainer }>
            <IconSelect />
          </button>
        </div>

        { opened && this.renderItemsContainer() }
      </React.Fragment>
    )
  }
}

export default Select;