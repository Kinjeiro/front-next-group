import React, { PropTypes, Component } from 'react';
import './Table.css';
import TableHeader from './TableHeader';

export default class Table extends Component {

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      age: PropTypes.number,
      nickname: PropTypes.string,
    })).isRequired,
    sortRowsBy: PropTypes.func.isRequired,
    filterRowsBy: PropTypes.func.isRequired,
  }

  renderHeader() {
    return (
      <tr>
        <TableHeader sortRowsBy={this.props.sortRowsBy} filterRowsBy={this.props.filterRowsBy} columnName="name" />
        <TableHeader sortRowsBy={this.props.sortRowsBy} filterRowsBy={this.props.filterRowsBy} columnName="age" />
        <TableHeader sortRowsBy={this.props.sortRowsBy} filterRowsBy={this.props.filterRowsBy} columnName="nickname" />
        <TableHeader sortRowsBy={this.props.sortRowsBy} filterRowsBy={this.props.filterRowsBy} columnName="employee" />
      </tr>
    );
  }

  renderRows() {
    return this.props.data.map(item => (item.visible || !Object.prototype.hasOwnProperty.call(item, 'visible')) &&
      <tr className="MyGrid__row" key={item.id}>
        <td className="MyGrid__row__name">{item.name}</td>
        <td className="MyGrid__row__age">{item.age}</td>
        <td className="MyGrid__row__nickname">{item.nickname}</td>
        <td className="MyGrid__row__employee">{item.employee}</td>
      </tr>);
  }

  render() {
    return (
      <div className="MyGrid">
        <table className="MyGrid__table">
          <thead className="MyGrid__table__header">
            {this.renderHeader()}
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

