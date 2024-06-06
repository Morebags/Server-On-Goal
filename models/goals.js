const mongoose = require('mongoose')
const Schema = mongoose.Schema
// goal1 ----goal1
const goalSchema = new Schema({
    title: {
        type: String,
        required: true,
        Unique: true,
        trim: true,
    },
    description: {
        type: String,
        require: true,
        trim: true,
    },
    progress: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
        max: 100,
    },
}, 
{ timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);