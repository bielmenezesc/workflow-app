import React, { useState } from 'react';
import Axios from 'axios';
import "../App.css";
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout.js';

function NewWorkflow() {
  const navigate = useNavigate();
  const [workflowData, setWorkflowData] = useState({
    name: '',
    flows: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkflowData({ ...workflowData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(workflowData);
    e.preventDefault();
    Axios.post('http://localhost:5000/workflows/create', workflowData)
      .then((response) => {
        console.log(response);
        navigate(`/workflow/show/${response.data._id}`);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };



  return (
    <div className="App">
      <Layout></Layout>
      <header className="App-header">
        <h2>Create New Workflow</h2>
        <a id="howToUse" href="http://localhost:3000/howToUse">Don't know how to create a flow?</a>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div class="flow">
            <label>Flow:</label>
            <textarea
              type="text"
              name="flows"
              onChange={handleInputChange}>
            </textarea>
          </div>

          <button type="submit">Create</button>
        </form>
      </header>

    </div>
  );
}

export default NewWorkflow;
