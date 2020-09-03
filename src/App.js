import React from 'react';
import './App.css';
import Board from './Board/Board';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <h1 className="todo-label">todos</h1>
        <Board />
      </div>
    </div>
  );
}

export default App;
