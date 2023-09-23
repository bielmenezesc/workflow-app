import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "../App.css";
import { useParams } from 'react-router-dom';

function EditWorkflow() {
  const [workflowData, setWorkflowData] = useState({});
  const workflowId = useParams(); // Obtém o ID do workflow a ser editado

  useEffect(() => {
    // Carregue os detalhes do workflow pelo ID
    Axios.get(`http://localhost:5000/workflow/edit/${workflowId.id}`)
      .then((response) => {
        setWorkflowData(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [workflowId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkflowData({ ...workflowData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.put(`http://localhost:5000/workflow/edit/${workflowId.id}`, workflowData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  console.log(workflowData);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Editar Workflow</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={workflowData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Beggining:</label>
            <input
              type="text"
              name="initBox"
              value={workflowData.initBox}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Condicion:</label>
            <input
              type="text"
              name="conditionBox"
              value={workflowData.conditionBox}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Action:</label>
            <input
              type="text"
              name="actionBox"
              value={workflowData.actionBox}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>End:</label>
            <input
              type="text"
              name="endBox"
              value={workflowData.endBox}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Save Editions</button>
        </form>
      </header>
    </div>
  );
}

export default EditWorkflow;
