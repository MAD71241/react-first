import logo from './logo.svg';
import './App.css';
import {CardList} from './card-list/card-list.component'
import { render } from '@testing-library/react';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList>
        {
          this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          )
          )
        }
        </CardList>
      </div>);
  }
}

export default App;
