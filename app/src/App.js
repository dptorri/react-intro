import React, { Component } from 'react';
import Card  from './components/Card';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to React</h1>
        </header>
        <p>Start</p>
        <Card />
      </div>
    );
  }
}

export default App;
