import React, { Component } from 'react';
import Card  from './components/Card';
import chess from './img/chess.jpg'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to React</h1>
        </header>
        <p>Start</p>
        <Card 
          image={chess}
          title={"Chess"}
          content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
      </div>
    );
  }
}

export default App;
