var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'sagar',
    password : 'abcd1234',
    database : 'MATHFOUNDATION'
})
connection.connect(function(error) {
    if(error) throw err;
})

module.exports = connection;