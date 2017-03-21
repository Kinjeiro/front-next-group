import React, { Component, PropTypes } from 'react';

// import i18n from 'utils/i18n-utils';

import './TableHeader.css';

export default class TableHeader extends Component {
  static propTypes = {
    sortRowsBy: PropTypes.func.isRequired,
    columnName: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.sortRowsBy = this.sortRowsBy.bind(this);
  }

  sortRowsBy() {
    if (this.props.sortRowsBy) {
      this.props.sortRowsBy(this.props.columnName);
    }
  }

  render() {
    const colName = this.props.columnName;

    return (
      <th key={colName}><a onClick={this.sortRowsBy}>{colName}</a></th>
    );
  }
}

