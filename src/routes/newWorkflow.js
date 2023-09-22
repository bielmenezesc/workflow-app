import React, { useState } from 'react';
import Axios from 'axios';
import "../App.css";

function NewWorkflow() {
  const [workflowData, setWorkflowData] = useState({
    name: '',
    // Outros campos do workflow
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkflowData({ ...workflowData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('/workflows', workflowData)
      .then((response) => {
        // Lida com a resposta (por exemplo, redirecionar para a página de detalhes)
      })
      .catch((error) => {
        // Trate erros de solicitação
      });
  };



  return (
    <div className="App">
      <header className="App-header">
        <h2>Create New Workflow</h2>
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
            <label>End:</label>
            <input
              type="text"
              name="endBox"
              value={workflowData.endBox}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Condicion:</label>
            <input
              type="text"
              name="condicionBox"
              value={workflowData.condicionBox}
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

          <button type="submit">Create</button>
        </form>
      </header>

    </div>
  );
}

export default NewWorkflow;
