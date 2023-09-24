import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
import Layout from '../components/layout.js';

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
      <Layout></Layout>
      <header className="App-header">
        <h2>Lista de Workflows</h2>
        <ul>
          {workflows.map((workflow) => (
            <li>{workflow.name} 
            <Link to={`http://localhost:3000/workflow/show/${(workflow._id).toString()}`}>
              <button>See more</button>
            </Link>
            <Link to={`http://localhost:3000/workflow/edit/${(workflow._id).toString()}`}>
              <button>Edit</button>
            </Link>
            <Link to={`http://localhost:3000/workflow/delete/${(workflow._id).toString()}`}>
              <button>Delete</button>
            </Link>
            <div class="line"></div>
            </li>   
          ))}
        </ul>
      </header>
    </div>
  );
};

export default WorkflowList;
