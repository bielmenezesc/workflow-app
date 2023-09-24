const chai = require('chai');
const { expect } = chai;
const request = require('supertest');
const app = require('../src/app.js');

describe('Workflow API', () => {
  it('should create a workflow', async () => {
    const newWorkflow = {
      name: 'Test Workflow',
      flows: '"start" -> "action 1" -> "action 2" -> "end";'
    };

    const response = await request(app)
      .post('/workflows/create')
      .send(newWorkflow)
      .expect(201);

    expect(response.body).to.have.property('_id');
    expect(response.body.name).to.equal('Test Workflow');
    expect(response.body.flows).to.equal('"start" -> "action 1" -> "action 2" -> "end";');
  });

  it('should update a workflow', async () => {
    const existingWorkflow = {
      name: 'Initial Workflow',
      flows: '"start" -> "action 1" -> "action 2" -> "end";'
    };

    // Create the initial workflow
    const createResponse = await request(app)
      .post('/workflows/create')
      .send(existingWorkflow)
      .expect(201);

    const updatedWorkflow = {
      name: 'Updated Workflow',
      flows: '"start" -> "action 1" -> "condition 1" -> "action 2" -> "action 3" -> "end"; "action 1" -> "condition 2" -> "action 4" -> "end";'
    };

    // Update the workflow
    const updateResponse = await request(app)
      .put(`/workflow/edit/${createResponse.body._id}`)
      .send(updatedWorkflow)
      .expect(200);

    expect(updateResponse.body.name).to.equal('Updated Workflow');
    expect(updateResponse.body.flows).to.equal('"start" -> "action 1" -> "condition 1" -> "action 2" -> "action 3" -> "end"; "action 1" -> "condition 2" -> "action 4" -> "end";');
  });

  it('should show a workflow', async () => {
    const existingWorkflow = {
      name: 'Show Workflow',
      flows: '"start" -> "action 1" -> "action 2" -> "end";'
    };

    // Create the initial workflow
    const createResponse = await request(app)
      .post('/workflows/create')
      .send(existingWorkflow)
      .expect(201);

    
    const showResponse = await request(app)
      .get(`/workflow/show/${createResponse.body._id}`)
      .expect(200);

    expect(showResponse.body).to.have.property('_id');
    expect(showResponse.body.name).to.equal('Show Workflow');
    expect(showResponse.body.flows).to.equal('"start" -> "action 1" -> "action 2" -> "end";');
  });

  it('should get all workflows', async () => {
    const workflow1 = {
      name: 'Workflow 1',
      flows: '"start" -> "action 1" -> "action 2" -> "end";'
    };

    const workflow2 = {
      name: 'Workflow 2',
      flows: '"start" -> "action 1" -> "action 2" -> "action 3" -> "end";'
    };

    await request(app)
      .post('/workflows/create')
      .send(workflow1)
      .expect(201);

    await request(app)
      .post('/workflows/create')
      .send(workflow2)
      .expect(201);

    const response = await request(app)
      .get('/workflow/showAll')
      .expect(200);

    expect(response.body).to.be.an('array');
    expect(response.body).to.have.lengthOf.at.least(2);
    expect(response.body.some((workflow) => workflow.name === 'Workflow 1')).to.be.true;
    expect(response.body.some((workflow) => workflow.flows === '"start" -> "action 1" -> "action 2" -> "end";')).to.be.true;
    expect(response.body.some((workflow) => workflow.name === 'Workflow 2')).to.be.true;
    expect(response.body.some((workflow) => workflow.flows === '"start" -> "action 1" -> "action 2" -> "action 3" -> "end";')).to.be.true;
  });

  it('should delete a workflow', async () => {
    const newWorkflow = {
      name: 'Test Workflow',
      flows: '"start" -> "action 1" -> "action 2" -> "end";'
    };

    const createResponse = await request(app)
      .post(`/workflows/create`)
      .send(newWorkflow)
      .expect(201);

      const deleteResponse = await request(app)
      .delete(`/workflow/delete/${createResponse.body._id}`)
      .expect(200);

    expect(deleteResponse.body.message).to.equal('Workflow deleted with success');
  });
});
