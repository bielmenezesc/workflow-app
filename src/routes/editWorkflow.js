import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "../App.css";
import { useParams, useNavigate  } from 'react-router-dom';
import Layout from '../components/layout.js';

function EditWorkflow() {
  const navigate = useNavigate();
  const [workflowData, setWorkflowData] = useState({});
  const workflowId = useParams();

  useEffect(() => {
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
        navigate(`/workflow/show/${workflowId.id}`);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="App">
      <Layout></Layout>
      <header className="App-header">
        <h2>Edit Workflow</h2>
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
            <label>Flow:</label>
            <textarea
              type="text"
              name="flows"
              value={workflowData.flows}
              onChange={handleInputChange}>
            </textarea>
          </div>
          <button type="submit">Save Editions</button>
        </form>
      </header>
    </div>
  );
}

export default EditWorkflow;
