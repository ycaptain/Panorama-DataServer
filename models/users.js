const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ModelTypes = require('./modelTypes');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    profile: {
        type: 'ObjectId',
        ref: 'Profile'
    },
    type: {
        type: String,
        enum: [
            ModelTypes.USER_TYPES.TYPE_USER,
            ModelTypes.USER_TYPES.TYPE_ADMIN
        ],
        default: ModelTypes.USER_TYPES.TYPE_USER
    }
}, {
    timestamps: true
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);