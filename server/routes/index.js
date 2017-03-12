var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
  next();
});

router.get('/genders', function (req, res, next) {
  var collection = db.get().collection('genders');

  collection.find().toArray(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
