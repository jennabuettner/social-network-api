const { Schema, Types } = require('mongoose');
const formatDate = require('../utils/dateFormat');

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
            get: timestamp => formatDate(timestamp),
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