import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

// import i18n from 'utils/i18n-utils';

import './AddForm.css';

export default class AddForm extends Component {
  static propTypes = {
    createNew: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: 0,
      nickname: '',
      employee: '',
    };

    this.createNew = this.createNew.bind(this);
    this.changeProperty = this.changeProperty.bind(this);
  }

  createNew(e) {
    e.preventDefault();

    if (this.props.createNew) {
      this.props.createNew(this.state.name, this.state.age, this.state.nickname, this.state.employee);
    }
  }

  changeProperty(e) {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.createNew}>
        Name:
        <input type="text" name="name" onChange={this.changeProperty} />
        <br />
        Age:
        <input type="number" name="age" onChange={this.changeProperty} />
        <br />
        Nickname:
        <input type="text" name="nickname" onChange={this.changeProperty} />
        <br />
        Employee:
        <input type="text" name="employee" onChange={this.changeProperty} />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <Link to='/' >Вернуться</Link>
      </form>
    );
  }
}

