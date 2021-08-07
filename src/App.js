import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { SearchBox } from './components/search-component/search-box.component';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <SearchBox
          placeholder='search kittens'
          handlechange={event => {
            this.setState(
              { searchField: event.target.value }, () => console.log(this.state.searchField)
            )
          }}>
        </SearchBox>
        <CardList monsters={filteredMonsters} />
      </div>);
  }
}

export default App;
