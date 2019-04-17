const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: 'ObjectId',
        ref: 'User'
    },
    video: {
        type: 'ObjectId',
        ref: 'Video'
    },
    replyTo: {
        type: 'ObjectId',
        ref: 'User'
    },
    likeCount: {
        type: Number,
        default: 0
    },
    dislikeCount: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);