import React, { Component, PropTypes } from 'react';

import Table from '../components/Table/Table';
import fakeData from '../fakeData';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filteredRows: fakeData,
      sortBy: 'name',
      sortDir: 'ASC',
    };

    this.sortRowsBy = this.sortRowsBy.bind(this);
  }

  state = {
    filteredRows: fakeData,
    sortBy: 'name',
    sortDir: 'ASC',
  };

  sortRowsBy(key) {
    let sortDir = this.state.sortDir;
    const sortBy = key;
    if (sortBy === this.state.sortBy) {
      sortDir = this.state.sortDir === 'ASC' ? 'DESC' : 'ASC';
    } else {
      sortDir = 'DESC';
    }
    const rows = this.state.filteredRows.slice();
    rows.sort((a, b) => {
      let sortVal = 0;
      if (a[sortBy] > b[sortBy]) {
        sortVal = 1;
      }
      if (a[sortBy] < b[sortBy]) {
        sortVal = -1;
      }

      if (sortDir === 'DESC') {
        sortVal *= -1;
      }
      return sortVal;
    });

    this.setState({ sortBy, sortDir, filteredRows: rows });
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>My First Grid</h2>
          <Table data={this.state.filteredRows} sortRowsBy={this.sortRowsBy} />
        </div>
      </div>
    );
  }
}

export default App;
