const cors = require('cors');

// const whitelist = ['http://localhost:3000', 'http://localhost:3001'];

var corsOptionDelegate = (req, callback) => {
    var corsOptions;

    // if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = {origin: true};
    // } else {
    //     corsOptions = {origin: false};
    // }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionDelegate);