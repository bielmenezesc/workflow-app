import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

const WorkflowList = () => {
  const [workflows, setWorkflows] = useState([]);

  useEffect(() => {
    // Fazer uma solicitação GET para o backend para obter os workflows
    axios.get('http://localhost:5000/workflow/showAll')
      .then((response) => {
        setWorkflows(response.data);
      })
      .catch((error) => {
        console.error('Erro ao obter os workflows:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Lista de Workflows</h2>
        <ul>
          {workflows.map((workflow) => (
            <li>{workflow.name} <Link to={`http://localhost:3000/workflow/show/${(workflow._id).toString()}`}>
              <button>Ver Detalhes</button>
            </Link></li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default WorkflowList;
