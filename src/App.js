import React from 'react';
import './App.scss';
import Board from './Board/Board';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <h1 className="todo-label">todos-react</h1>
        <Board />
      </div>
    </div>
  );
}

export default App;
