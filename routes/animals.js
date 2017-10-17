var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var myObj = {name: "This is the returned object from the backend"}
  res.send({merp:'herple'});
});

module.exports = router;
