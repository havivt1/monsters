import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/card-list/card-list.component';
import { CardList } from './components/card-list/card-list.component';
import './main.styles.css';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      doList: [
        {
          name: "simple content",
          id: "asd1"
        },
        {
          name: "sec word",
          id: "dfsdf"
        }
      ],
      searchField: ''
    }

    /*
    Learning Node #1:
      if the handleChange wasn't an arrow function, we should have to write this sentence.
      thas because class methods doesn't know who 'this' reffers and we have to explicit the context of 'this'
      in the constuctor with this line of code: (see the video in React-Basic 'Event Binding')
      ****A good rule of thumb is this: Use arrow functions on any class methods
          you define and aren't part of React (i.e. render(), componentDidMount()).
      this.handleChange = this.handleChange.bind(this);
    */
  }

  handleChange = e => {
    return this.setState({ searchField: e.target.value });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ doList: users }));
  }
  render() {
    const { doList, searchField } = this.state;
    const filteredUsers = doList.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return <div className="main-container">

      <SearchBox placeholder='Search for users' handleChange={this.handleChange} />
      <CardList doList={filteredUsers} />


    </div>
  }

}

export default App;
