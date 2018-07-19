import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Routes from "./Routes";
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Nav />
        {/* <Footer/> */}
        {Routes}
     
      </div>
    );
  }
}

export default App;

