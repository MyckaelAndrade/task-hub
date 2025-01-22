import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <h1>Task Hub</h1>
          <div className="input task">
            <h2>Título da tarefa</h2>
            <input type="text" placeholder="Escreva aqui o título da tarefa" />
          </div>
          <div className="input desc">
            <h2>Descrição da tarefa</h2>
            <textarea cols="30" rows="5" placeholder="Escreva aqui a descrição da tarefa"></textarea>
          </div>
          <div className="input date">
            <h2>Data de vencimento</h2>
            <input type="date" placeholder="Escreva sua tarefa" />
          </div>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;