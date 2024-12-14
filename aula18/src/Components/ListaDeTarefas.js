import React, { useState } from 'react';

function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState('');
  const [listaDeTarefas, setListaDeTarefas] = useState([]);

  const handleInputChange = (event) => {
    setTarefa(event.target.value);
  };

  const handleAdicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setListaDeTarefas([...listaDeTarefas, tarefa]);
      setTarefa('');
    }
  };

  return (
    <div>
      <input type="text" value={tarefa} onChange={handleInputChange} />
      <button onClick={handleAdicionarTarefa}>Adicionar</button>
      <ul>
        {listaDeTarefas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;