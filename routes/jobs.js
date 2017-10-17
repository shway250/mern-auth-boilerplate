var express = require('express');
var mongoose = require('mongoose');
var Job = require('../models/job');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Job.create({
  //   title: 'Junior Dev',
  //   companyName: 'Google',
  //   location: 'Kirkland'
  // }, function(err,job){
  //   if(err) return console.log(err);
  //   res.send(job);
  // });
  Job.find({}, function(err,jobs){
    if(err) return console.log(err);
    res.send(jobs);
  });
});

module.exports = router;