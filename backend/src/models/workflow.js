const mongoose = require('mongoose');

const workflowSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }, initBox: {
        type: String,
        required: true,
    }, endBox: {
        type: String,
        required: true,
    }, conditionalBox: {
        type: String,
        required: true,
    }, actionBox: {
        type: String,
        required: true,
    }
});

const workflow = mongoose.model('Workflow', workflowSchema);

module.exports = workflow;

