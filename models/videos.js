const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ModelTypes = require('./modelTypes');

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: 'ObjectId',
        ref: 'User'
    },
    theme: {
        type: String,
        enum: [
            ModelTypes.VIDEO_TYPES.THEME_ART,
            ModelTypes.VIDEO_TYPES.THEME_EDUCATION,
            ModelTypes.VIDEO_TYPES.THEME_SPORT,
            ModelTypes.VIDEO_TYPES.THEME_OTHER
        ],
        default: ModelTypes.VIDEO_TYPES.THEME_OTHER
    },
    type: {
        type: String,
        enum: [
            ModelTypes.VIDEO_TYPES.TYPE_LIVE,
            ModelTypes.VIDEO_TYPES.TYPE_VIDEO,
            ModelTypes.VIDEO_TYPES.TYPE_PANORAMA_VIDEO,
            ModelTypes.VIDEO_TYPES.TYPE_PANORAMA_LIVE
        ],
        default: ModelTypes.VIDEO_TYPES.TYPE_VIDEO
    },
    videoFile: {
        type: String
    },
    streamType: {
        type: String,
        enum: [
            ModelTypes.VIDEO_TYPES.STREAM_RTSP,
            ModelTypes.VIDEO_TYPES.STREAM_RTMP
        ]
    },
    streamUrl: {
        type: String
    },
    description: {
        type: String,
        required
    },
    keywords: [
        {type: String}
    ],
    thumbnail: {
        type: String,
        required: true
    },
    viewCount: {
        type: Number,
        default: 0
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

module.exports = mongoose.model('Video', videoSchema);