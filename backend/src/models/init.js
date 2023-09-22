const mongoose = require('mongoose');

const initSchema = new mongoose.Schema({
    init: {
        type: String,
        required: true,
    }, successor: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Box",
        required: true,
    },
});

const init = Box.discriminator("Init", initSchema);

module.exports = init;