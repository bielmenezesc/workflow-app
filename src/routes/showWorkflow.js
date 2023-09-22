import "../App.css";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function WorkflowDetail() {
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

  return (
    <div className="App">
      <header className="App-header">
        <h2>Detalhes do Workflow</h2>
        <p>Nome: {workflowData.name}</p>
        <p>Beggining: {workflowData.initBox}</p>
        <p>Condicion: {workflowData.conditionBox}</p>
        <p>Action: {workflowData.actionBox}</p>
        <p>End: {workflowData.endBox}</p>
      </header>
    </div>
  );
}

export default WorkflowDetail;