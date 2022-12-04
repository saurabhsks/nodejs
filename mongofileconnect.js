const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

exports.connectdb = function()
{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("Connected to database!");
    });
};