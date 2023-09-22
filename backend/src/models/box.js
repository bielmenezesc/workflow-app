const mongoose = require("mongoose");

const boxSchema = new mongoose.Schema({
});

boxSchema.pre("save", async function (next) {
    if (!this.id) {
        try {
            const count = await Box.countDocuments();
            this.id = count + 1;
        } catch (error) {
            return next(error);
        }
    }
    next();
});

const Box = mongoose.model("Box", boxSchema);

module.exports = Box;