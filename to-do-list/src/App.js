import React from 'react';
import './App.css';

// Component Lista de Tarefas
function ListaDeTarefas(props) {
  const tasks = props.tasks;
  const listaDeTarefas = tasks.map((task) => (
    <li key={task.id}>{task.texto}</li>
  ));
  return <ul>{listaDeTarefas}</ul>;
}


function App() {
  // Array de tasks
  const tasks = [
    { id: 1, texto: "HTML" },
    { id: 2, texto: "CSS" },
    { id: 3, texto: "React" },
    { id: 4, texto:"JSX" },
  ];

  return (
    <div className="App">
      <h1>Tasks de programação</h1>
      <ListaDeTarefas tasks={tasks} />
    </div>
  );
}

export default App;
