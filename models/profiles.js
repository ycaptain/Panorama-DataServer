const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    thumbnail: {
        type: String
    },
    gender: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    dob: {
        type: Date
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);