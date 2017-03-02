import React, { PropTypes, Component } from 'react';
import './MyGrid.css';

class MyGrid extends Component {
  static props = {
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number,
      nickname: PropTypes.string
    })),
  };
  
  
  
  
  state = {
    filteredRows: this.props.data,
    sortBy: 'name',
    sortDir: 'ASC'
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
        sortVal = sortVal * -1;
      }
      return sortVal;
    });
    
    this.setState({ sortBy, sortDir, filteredRows: rows });
    
  }
  
  
  renderRows() {
    return this.state.filteredRows.map(function (item, index) {
      return (
        <tr className="MyGrid__row" key={index}>
          <td className="MyGrid__row__name">{item.name}</td>
          <td className="MyGrid__row__age">{item.age}</td>
          <td className="MyGrid__row__nickname">{item.nickname}</td>
          <td className="MyGrid__row__employee">{item.employee}</td>
        </tr>
      )
    });
  }
  
  render() {
    return (
      <div className="MyGrid">
        <table className="MyGrid__table">
          <thead className="MyGrid__table__header">
          <tr>
            <th key="Name"><a onClick={this.sortRowsBy.bind(this, 'name')}>Name</a></th>
            <th key="Age"><a onClick={this.sortRowsBy.bind(this, 'age')}>Age</a></th>
            <th key="Nickname"><a onClick={this.sortRowsBy.bind(this, 'nickname')}>Nickname</a></th>
            <th key="Employee"><a onClick={this.sortRowsBy.bind(this, 'employee')}>Employee</a></th>
          </tr>
          </thead>
          <tbody>
          {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyGrid;