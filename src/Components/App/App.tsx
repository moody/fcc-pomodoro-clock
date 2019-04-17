import React from 'react';
import './App.scss';
import BreakLength from '../BreakLength/BreakLength';
import SessionLength from '../SessionLength/SessionLength';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pomodoro Clock</h1>
        </header>
        <div className="App-content">
          <BreakLength />
          <SessionLength />
        </div>
      </div>
    );
  }
}

export default App;
