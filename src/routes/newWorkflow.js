import React, { useState } from 'react';
import Axios from 'axios';
import "../App.css";

function NewWorkflow() {
  const [workflowData, setWorkflowData] = useState({
    name: '',
    initBox: '',
    endBox: '',
    conditionBox: '',
    actionBox: ''
  });

  const handleInputChange = (e) => {
    const { name, value} = e.target;
    setWorkflowData({ ...workflowData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(workflowData);
    e.preventDefault();
    Axios.post('http://localhost:5000/workflows/create', workflowData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
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
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Beggining:</label>
            <input
              type="text"
              name="initBox"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>End:</label>
            <input
              type="text"
              name="endBox"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Condicion:</label>
            <input
              type="text"
              name="conditionBox"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Action:</label>
            <input
              type="text"
              name="actionBox"
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
