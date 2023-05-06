import React from 'react';
import './App.css';
import Tasks from './Components/Tasks';
import TasksApi from './Components/TasksApi';

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
      <h2>Tasks de programação</h2>
      <Tasks tasks={tasks} />

      <h2>Api</h2>
      <TasksApi />
    </div>
  );
}

export default App;
