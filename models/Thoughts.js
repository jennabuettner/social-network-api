const { Schema, model } = require('mongoose');
const commentSchema = require('./Comments');
const date = require('../utils/date');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 300,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: time => date(time)
        },
        username: {
            type: String,
            required: true,
        },
        comments: [commentSchema],

    },
    {
        toJSON: {
            getters:true
        },
    }
);



const Thoughts = model('Thoughts', thoughtSchema);

module.exports = Thoughts;