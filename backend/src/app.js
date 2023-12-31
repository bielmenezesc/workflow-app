const express = require('express');
const bodyParser = require('body-parser');
const workflow = require('./models/workflow');
const app = express();
var cors = require('cors');
require('./db.js');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

app.use(cors());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

// route to creat a new workflow
app.post('/workflows/create', async (req, res) => {
    const { name, flows } = req.body;

    try {
        const newWorkflow = new workflow({
            name,
            flows
        });

        await newWorkflow.save();

        res.status(201).json(newWorkflow);
    } catch (error) {
        res.status(500).json({ error: 'Error on creating the workflow.' });
    }
});

// route to edit a workflow
app.put('/workflow/edit/:id', async (req, res) => {
    const id = req.params;
    const { name, flows } = req.body;

    try {
        const oldWorkflow = await workflow.findOne({ "_id": new ObjectId(id) });

        if (!oldWorkflow) {
            return res.status(404).json({ error: 'Workflow not found.' });
        }

        oldWorkflow.name = name;
        oldWorkflow.flows = flows;

        await oldWorkflow.save();

        res.status(200).json(oldWorkflow);
    } catch (error) {
        res.status(500).json({ error: 'Error on editing the workflow.' });
    }
});

app.get('/workflow/edit/:id', async (req, res) => {
    var id = req.params;

    try {
        const showWorkflow = await workflow.findOne({ "_id": new ObjectId(id) });

        if (!showWorkflow) {
            return res.status(404).json({ error: 'Workflow not found.' });
        }
        res.status(200).json(showWorkflow);
    } catch (error) {
        res.status(500).json({ error: 'Error on showing the workflow.' });
    }
})

// route to delete a workflow
app.delete('/workflow/delete/:id', async (req, res) => {
    const id = req.params;

    try {
        await workflow.deleteOne({ "_id": new ObjectId(id) });

        res.status(200).json({ message: 'Workflow deleted with success' });;
    } catch (error) {
        res.status(500).json({ error: 'Error on deleting the workflow.' });
    }
});

// route to show details of a workflow
app.get('/workflow/show/:id', async (req, res) => {
    var id = req.params;

    try {
        const showWorkflow = await workflow.findOne({ "_id": new ObjectId(id) });

        if (!showWorkflow) {
            return res.status(404).json({ error: 'Workflow not found.' });
        }
        res.status(200).json(showWorkflow);
    } catch (error) {
        res.status(500).json({ error: 'Error on showing the workflow.' });
    }
})

// Rota para buscar todos os workflows
app.get('/workflow/showAll', async (req, res) => {
    try {
        const workflows = await workflow.find(); // Busque todos os workflows no banco de dados

        res.status(200).json(workflows); // Envie os workflows como resposta JSON
    } catch (error) {
        console.error('Erro ao buscar workflows:', error);
        res.status(500).json({ error: 'Erro ao buscar workflows.' });
    }
});

app.listen(5000, () => {
    console.log("app is running");
});

module.exports = app