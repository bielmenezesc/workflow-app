import "../App.css";
import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Graphviz } from 'graphviz-react';

const GraphRenderer = () => {
  const [workflowData, setWorkflowData] = useState({});
  const workflowId = useParams(); // Obtém o ID do workflow a ser exibido

  useEffect(() => {
    // Carregue os detalhes do workflow pelo ID
    Axios.get(`http://localhost:5000/workflow/show/${workflowId.id}`)
      .then((response) => {
        setWorkflowData(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

  }, [workflowId]);

  console.log(workflowData.flows);

  return (
    <div className="App">
      <header className="App-header">
        <h2>{workflowData.name}</h2>
        <div>
          <Graphviz dot={`digraph G { ${workflowData.flows} }`} />
        </div>
      </header>
    </div>
  );
};

export default GraphRenderer;
