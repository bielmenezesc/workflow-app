const mongoose = require('mongoose');

const conditionType = ["if", "else"];

const conditionSchema = new mongoose.Schema({
    type: {
        enum: conditionType,
        required: true,
    },
    condition: {
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

const condition = Box.discriminator("condition", conditionSchema);

module.exports = condition;