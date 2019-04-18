import React from 'react';
import Counter from '../Counter/Counter';
import Timer from '../Timer/Timer';
import './App.scss';

const App: React.FunctionComponent = () => (
  <div className="App">
    <header className="App-header">
      <h1>Pomodoro Clock</h1>
    </header>

    <div className="App-content">
      <div className="App-counters">
        <Counter id="break" />
        <Counter id="session" />
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

export default App;
