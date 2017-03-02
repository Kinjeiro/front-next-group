import React, {Component} from 'react';

import MyGrid from './MyGrid';

import './App.css';

class App extends Component {
  render() {
      var gridData = [
          {
              name: 'Giacomo Guilizzoni\nFounder & CEO',
              age: 40,
              nickname: 'Peldi',
              employee: 'no'
          },
          {
              name: 'Marco Botton\nTuttofare',
              age: 38,
              nickname: '',
              employee:'no'
          },
          {
              name: 'Peter Pettigrew\nMuggleworld',
              age: 15,
              nickname: 'Ratface',
              employee: 'yes'
          }
      ];


    return (
      <div className="App">
        <div className="App-header">
          <h2>My First Grid</h2>
          <MyGrid data={gridData} />
        </div>
      </div>
    );
  }
}

export default App;
