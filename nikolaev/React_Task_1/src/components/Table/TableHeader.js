import React, { Component, PropTypes } from 'react';

// import i18n from 'utils/i18n-utils';

import './TableHeader.css';
import Filter from './Filter';

export default class TableHeader extends Component {
  static propTypes = {
    sortRowsBy: PropTypes.func.isRequired,
    filterRowsBy: PropTypes.func.isRequired,
    columnName: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.sortRowsBy = this.sortRowsBy.bind(this);
  }

  sortRowsBy(e) {
    e.preventDefault();

    if (this.props.sortRowsBy) {
      this.props.sortRowsBy(this.props.columnName);
    }
  }

  render() {
    const colName = this.props.columnName;

    return (
      <th key={colName}>
        <div>
          <a onClick={this.sortRowsBy}>{colName}</a>
        </div>
        <div>
          <Filter columnName={colName} filterRowsBy={this.props.filterRowsBy} />
        </div>
      </th>
    );
  }
}

