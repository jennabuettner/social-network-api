const { Schema, Types } = require('mongoose');
const date = require('../utils/date');

const commentSchema = new Schema(
    {
        commentId:{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        commentBody: {
            type: String,
            required: true,
            max_length: 300,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: time => date(time),
        },
    },
    {
        toJSON: {
            getters:true,
        },
        id: false,
    }
);

module.exports = commentSchema;