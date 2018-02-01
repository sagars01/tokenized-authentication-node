var express = require('express');
var router = express.Router();
var db = require('../config/db.config');
var userModel = require('../models/users.model');
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  userModel.getAllUser(function(err , rows){
    if(err) {
      res.json(err);
    }else {
      res.json(rows);
    }
  })
});

module.exports = router;
