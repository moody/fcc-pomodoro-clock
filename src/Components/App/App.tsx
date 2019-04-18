import React from 'react';
import './App.scss';
import BreakLength from '../BreakLength/BreakLength';
import SessionLength from '../SessionLength/SessionLength';
import Timer from '../Timer/Timer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pomodoro Clock</h1>
        </header>

        <div className="App-content">
          <div className="App-counters">
            <BreakLength />
            <SessionLength />
          </div>

          <div className="App-timer">
            <Timer />
          </div>
        </div>

        <footer className="App-footer">
          <p>
            Coded by <a href="https://github.com/moody">Justin Moody</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
