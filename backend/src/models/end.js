const mongoose = require('mongoose');

const endSchema = new mongoose.Schema({
    end: {
        type: String,
        required: true,
    }, predecessor: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Box",
        required: true,
    },
});

const endBox = Box.discriminator("End", endSchema);

module.exports = end;