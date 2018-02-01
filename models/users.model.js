var db = require('../config/db.config');

var userModels = {
    getAllUser : function _getAllUsers(callback) {
        return db.query("SELECT * FROM users" , callback);
    },
    registerUser : function( userData , callback ) {
        return db.query("INSERT INTO ")
    }
}

module.exports = userModels;