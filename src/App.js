import React, { useState } from 'react';
import monthNames from './monthNames';
import './App.css';

function App() {
  const [name, setName] = useState('Fulano de Tal');
  const [cpf, setCpf] = useState('000.000.000-00');
  const [price, setPrice] = useState('0.00');
  const [service, setService] = useState('Alguma Coisa');
  const [city, setCity] = useState('Goiânia');
  const [date, setDate] = useState('2019-09-01');
  const [emitter, setEmitter] = useState('Beltrano da Silva');
  const [emitterCpf, setEmitterCpf] = useState('000.000.000-00');

  const dateObj = new Date(date);

  return (
    <div className="App">
      <div className="data">
        <div className="field">
          <span>Nome do Pagador:</span>
          <input type="text" value={name} onChange={({ target: { value } }) => setName(value)} />
        </div>
        <div className="field">
          <span>CPF do Pagador:</span>
          <input type="text" value={cpf} maxLength={14} onChange={({ target: { value } }) => setCpf(value)} />
        </div>
        <div className="field">
          <span>Valor:</span>
          <input type="number" step="0.01" min="0" value={price} onChange={({ target: { value } }) => setPrice(value)} />
        </div>
        <div className="field">
          <span>Referente a:</span>
          <input type="text" value={service} onChange={({ target: { value } }) => setService(value)} />
        </div>
        <div className="field">
          <span>Cidade:</span>
          <input type="text" value={city} onChange={({ target: { value } }) => setCity(value)} />
        </div>
        <div className="field">
          <span>Data:</span>
          <input type="date" value={date} onChange={({ target: { value } }) => setDate(value)} />
        </div>
        <div className="field">
          <span>Nome do Emissor:</span>
          <input type="text" value={emitter} onChange={({ target: { value } }) => setEmitter(value)} />
        </div>
        <div className="field">
          <span>CPF do Emissor:</span>
          <input type="text" value={emitterCpf} maxLength={14} onChange={({ target: { value } }) => setEmitterCpf(value)} />
        </div>
        <div>
          <button type="button" onClick={() => window.print()}>Imprimir</button>
        </div>
        <hr />
      </div>
      <div className="receipt">
        <h1>Recibo</h1>
        <p>Recebi de {name}, CPF {cpf}, a quantia de R$ {price} referente a {service}.</p>
        <p className="footer">{city}, {dateObj.getUTCDate()} de {monthNames[dateObj.getUTCMonth()]} de {dateObj.getUTCFullYear()}.</p>
        <div className="footer">
          {emitter}<br />
          CPF: {emitterCpf}
        </div>
      </div>
    </div>
  );
}

export default App;
