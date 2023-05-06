import React, { useState, useEffect } from 'react';

function TasksApi() {
    const [tasks, setTasks] = useState([]);

    // Funcções de Fetch

    //   useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos') // exemplo de API com tarefas
    //       .then(response => response.json())
    //       .then(data => setTarefas(data))
    //   }, [])

    useEffect(() => {
        const getTasks = async () => {
            const url = "https://jsonplaceholder.typicode.com/todos";
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setTasks(data)
        };
        getTasks();
    }, [])


    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default TasksApi;
