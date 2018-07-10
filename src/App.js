import React, { Component } from 'react';
import './App.css';
import Adventures from "./components/Adventures/Adventures"
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Adventures/>
      </div>
    );
  }
}

export default App;
