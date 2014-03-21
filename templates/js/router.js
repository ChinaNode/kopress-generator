/*
* init all the routes in routes folder
*/
var fs = require('fs');

module.exports = function (app) {
    fs.readdir('routes', function (err, files) {
        if (err) {
            throw err;
        }

        for (var e; files.length && (e = files.shift());) {
            var m = require('./routes/' + e);
            m.init && m.init(app);
        }
    })
}