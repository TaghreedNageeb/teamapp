import React, { Component } from 'react';
import './App.css';
import Container from './Container'

class App extends Component {
  

  render() {
    return (
      <div className='App'>
        <h1 className='title'>My Tasks List</h1>
        <Container/>
      </div>
    );
  }
}

export default App;