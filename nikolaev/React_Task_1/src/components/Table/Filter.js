import React, { Component, PropTypes } from 'react';


import './Filter.css';

export default class Filter extends Component {
  static propTypes = {
    columnName: PropTypes.string.isRequired,
    filerTable: PropTypes.func.isRequired,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.filterRowsBy = this.filterRowsBy.bind(this);
  }

  filterRowsBy(e) {
    e.preventDefault();

    if (this.props.filerTable) {
      this.props.filerTable({ key: this.props.columnName, value: e.target.value });
    }
  }

  render() {
    const columnName = this.props.columnName;
    const keyName = `filter_${columnName}`;

    return (
      <div className="filter">
        <input key={keyName} type="text" defaultValue="" className="filter__input" onChange={this.filterRowsBy} />
      </div>
    );
  }
}
