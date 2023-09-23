import React from 'react';
import Axios from 'axios';
import "../App.css";
import { useParams } from 'react-router-dom';

function DeleteWorkflow() {
  const workflowId = useParams(); // Obtém o ID do workflow a ser excluído

  const handleDelete = () => {
    Axios.delete(`http://localhost:5000/workflow/delete/${workflowId.id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Deletar Workflow</h2>
        <p>Tem certeza de que deseja excluir este workflow?</p>
        <button onClick={handleDelete}>Delete</button>
      </header>
    </div>
  );
}

export default DeleteWorkflow;