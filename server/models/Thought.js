const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'You need to leave a thought!',
        minlength: 2,
        maxlength: 280,
        trim: true,
    },
    thoughtAuthor: {
        type: String,
        require: true,
        trim: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
})