import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Table from '../../components/table/Table';
import * as tablePageActions from '../../actions/tablePage';
// import AddForm from '../addForm/AddForm';
// import fakeData from '../../fakeData';

import './App.css';

class App extends Component {

  // constructor(props) {
  //   super(props);

    // this.state = {
    //   filteredRows: fakeData,
    //   sortBy: 'name',
    //   sortDir: 'ASC',
    //   filters: {
    //     name: '',
    //     age: '',
    //     nickname: '',
    //     employee: '',
    //   },
    // };

    // this.sortRowsBy = this.sortRowsBy.bind(this);
    // this.filterRowsBy = this.filterRowsBy.bind(this);
    // this.createNew = this.createNew.bind(this);
//  }

  // state = {
  //   filteredRows: fakeData,
  //   sortBy: 'name',
  //   sortDir: 'ASC',
  // };

  // sortRowsBy(key) {
  //   let sortDir = this.state.sortDir;
  //   const sortBy = key;
  //   if (sortBy === this.state.sortBy) {
  //     sortDir = this.state.sortDir === 'ASC' ? 'DESC' : 'ASC';
  //   } else {
  //     sortDir = 'DESC';
  //   }
  //   const rows = this.state.filteredRows.slice();
  //   rows.sort((a, b) => {
  //     let sortVal = 0;
  //     if (a[sortBy] > b[sortBy]) {
  //       sortVal = 1;
  //     }
  //     if (a[sortBy] < b[sortBy]) {
  //       sortVal = -1;
  //     }
  //
  //     if (sortDir === 'DESC') {
  //       sortVal *= -1;
  //     }
  //     return sortVal;
  //   });
  //
  //   this.setState({ sortBy, sortDir, filteredRows: rows });
  // }
  //
  // filterRowsBy(key, value) {
  //   const filters = this.state.filters;
  //   filters[key] = value.toString().toLowerCase();
  //   const rows = this.state.filteredRows.map((item) => {
  //     const newItem = item;
  //     let visible = true;
  //     for (const filter in filters) {
  //       if (Object.prototype.hasOwnProperty.call(filters, filter)) {
  //         visible = visible && (filters[filter] === '' || item[filter].toString().toLowerCase().indexOf(filters[filter]) !== -1);
  //       }
  //     }
  //     newItem.visible = visible;
  //     return newItem;
  //   },
  //   );
  //   this.setState({ filteredRows: rows, filters });
  // }

  createNew(name, age, nickname, employee) {
    const rows = this.state.filteredRows;
    const newId = 1 + Math.max(...rows.map(item => item.id));
    const ageNumber = Number(age);
    rows.push({ newId, name, ageNumber, nickname, employee });
    this.setState({ filteredRows: rows });
  }

  render() {
     const rows = this.props.rows;
     const { filterTable, sortTable } = this.props.pageActions;
    //
    // return (
    //   <Router>
    //     <div className="App">
    //       <div className="App-header">
    //         <h2>My First Grid</h2>
    //       </div>
    //       <div className="App-body">
    //         <Route
    //           exact path="/" render={() => (
    //             <div>
    //               <Table data={this.state.filteredRows} sortRowsBy={this.sortRowsBy} filterRowsBy={this.filterRowsBy} />
    //               <Link to="/createNew">Добавить</Link>
    //             </div>)}
    //         />
    //         <Route
    //           path="/createNew" render={() => (
    //             <div>
    //               <AddForm createNew={this.createNew} />
    //             </div>)}
    //         />
    //       </div>
    //     </div>
    //   </Router>
    // );

    return (
      <div className="App">
        <div className="App-header">
          <h2>My First Grid</h2>
        </div>
        <div className="App-body">
          <div>
            <Table data={rows} sortTable={sortTable} filterTable={filterTable} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rows: state.tablePage.rows,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(tablePageActions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
