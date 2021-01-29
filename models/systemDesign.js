const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SystemDesignSchema = new Schema({
    objectiveID: {
        type: String,
        required: true,
        unique: true
    },
    ptaDgnNumber: {
        type: String,
        required: true
    },
    allocReference: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    otherDgnNumbers:
        [String],
    revision: {
        type: String,
        required: true
    },
    filename: {
        type: String, required: true
    }
});

const SystemDesign = mongoose.model("SystemDesign", SystemDesignSchema);

module.exports = SystemDesign;