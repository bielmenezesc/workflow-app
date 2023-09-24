const mongoose = require('mongoose');

const workflowSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    }, flows: {
        type: String,
        required: true,
        trim: true,
    }
});

const workflow = mongoose.model('Workflow', workflowSchema);

module.exports = workflow;

