<<<<<<< Updated upstream
=======
import React, { useState } from 'react';
import axios from 'axios';
>>>>>>> Stashed changes
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/task', { title, description, date });
      navigate('/task');
    } catch (err) {
      setError('Erro ao adicionar tarefa');
    }
  };

  return (
    <div className="App">
<<<<<<< Updated upstream
      <header className="App-header">
      </header>
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
=======
      <div className="container">
        {error && <p className="error">{error}</p>}
        <form className="box" onSubmit={handleSubmit}>
          <h1>Task Hub</h1>
          <div className="input task">
            <h2>Título da tarefa</h2>
            <input
              type="text"
              placeholder="Escreva aqui o título da tarefa"
              value={title}
              onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="input desc">
            <h2>Descrição da tarefa</h2>
            <textarea
              cols="30"
              rows="5"
              placeholder="Escreva aqui a descrição da tarefa"
              value={description}
              onChange={(e) => setDescription(e.target.value)}>
            </textarea>
          </div>
          <div className="input date">
            <h2>Data de vencimento</h2>
            <input
              type="date"
              placeholder="Escreva sua tarefa"
              value={date}
              onChange={(e) => setDate(e.target.value)} />
          </div>
          <button type="submit">Add</button>
        </form>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default App;