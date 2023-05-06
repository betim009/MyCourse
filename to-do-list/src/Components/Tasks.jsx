import React from "react";
import PropTypes from "prop-types";

function Tasks(props) {
  const { tasks } = props;
  const listaDeTarefas = tasks.map((task) => (
    <li key={task.id}>{task.texto}</li>
  ));

  return (
    <div>
      <ul data-testid="lista-1">{listaDeTarefas}</ul>
    </div>
  );
};

// Definindo nossas props como do tipo de Array, e chaves id e 
Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      texto: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Tasks.defaultProps = {
  tasks: [],
};

export default Tasks;
