const express = require('express');
const bodyParser = require('body-parser');
const workflow = require('./models/workflow');
const useParams = require('react-router-dom');
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
    const { name, initBox, endBox, conditionBox, actionBox } = req.body;

    console.log(name);
    console.log(initBox);
    console.log(endBox);
    console.log(conditionBox);
    console.log(actionBox);

    try {
        const newWorkflow = new workflow({
            name,
            initBox,
            endBox,
            conditionBox,
            actionBox
        });

        await newWorkflow.save();

        res.status(201).json(newWorkflow);
    } catch (error) {
        res.status(500).json({error: 'Error on creating the workflow.'});
    }
});

// route to edit a workflow
app.put('/workflows/edit/:id', async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const updateWorkflow = await workflow.findByIdAndUpdate(id, updateData, {
            new: true,
        });
        if (!updateWorkflow) {
            return res.status(404).json({error: 'Workflow not found.'});
        }
        res.status(200).json(updateWorkflow);
    } catch (error) {
        res.status(500).json({ error: 'Error on editing the workflow.' });
    }
});

// route to delete a workflow
app.delete('/workflows/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deleteWorkflow = await workflow.findByIdAndRemove(id);
        if (!deleteWorkflow) {
            return res.status(404).json({error: 'Workflow not found.'});
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error on deleting the workflow.' });
    }
});

// route to show details of a workflow
app.get('/workflow/show/:id', async (req, res) => {
    var id = req.params;

    console.log(id);

    try {
        const showWorkflow = await workflow.findOne({"_id": new ObjectId(id)});
        
        console.log(showWorkflow);

        if (!showWorkflow) {
            return res.status(404).json({ error: 'Workflow not found.' });
        }
        res.status(200).json(showWorkflow);
    } catch (error) {
        res.status(500).json({ error: 'Error on showing the workflow.' });
    }
})

app.listen(5000, () => {
    console.log("app is running");
});