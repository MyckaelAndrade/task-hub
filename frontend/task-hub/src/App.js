import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Antes da requisição:', title, description, date); // Adicione um console.log aqui para verificar os valores antes da requisição
  
    try {
      const response = await axios.post('http://localhost:3001/task', { title, description, date });
      console.log('Resposta da requisição:', response);
    } catch (err) {
      console.error('Erro na requisição:', err);
      setError('Erro ao adicionar tarefa');
    }
  };

  return (
    <div className="App">
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
      </div>
    </div>
  );
}

export default App;