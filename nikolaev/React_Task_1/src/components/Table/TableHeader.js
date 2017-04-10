import React, { Component, PropTypes } from 'react';

// import i18n from 'utils/i18n-utils';

import './TableHeader.css';
import Filter from './Filter';

export default class TableHeader extends Component {
  static propTypes = {
    sortTable: PropTypes.func.isRequired,
    filterTable: PropTypes.func.isRequired,
    columnName: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.sortRowsBy = this.sortRowsBy.bind(this);
  }

  sortRowsBy(e) {
    e.preventDefault();

    if (this.props.sortTable) {
      this.props.sortTable({ key: this.props.columnName });
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
          <Filter columnName={colName} filerTable={this.props.filterTable} />
        </div>
      </th>
    );
  }
}

