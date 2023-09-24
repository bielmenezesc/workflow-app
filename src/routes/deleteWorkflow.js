import React from 'react';
import Axios from 'axios';
import "../App.css";
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout.js';

function DeleteWorkflow() {
  const navigate = useNavigate();
  const workflowId = useParams(); // Obtém o ID do workflow a ser excluído

  const handleDelete = () => {
    Axios.delete(`http://localhost:5000/workflow/delete/${workflowId.id}`)
      .then((response) => {
        console.log(response.data);
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="App">
      <Layout></Layout>
      <header className="App-header">
        <h2>Deletar Workflow</h2>
        <p>Tem certeza de que deseja excluir este workflow?</p>
        <div><button onClick={handleDelete}>Delete</button></div>
      </header>
    </div>
  );
}

export default DeleteWorkflow;