var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users',
})

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send( {message: 'Testing'} );
;

module.exports = router;
