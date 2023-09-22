const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
    action: {
        type: String,
        required: true,
    }, predecessor: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Box",
        required: true,
    }, successor: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Box",
        required: true,
    },

});

const action = Box.discriminator("Action", actionSchema);

module.exports = action;

