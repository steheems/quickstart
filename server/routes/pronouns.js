/**
 * Router for the pronouns collection.
 *
 * Created by erwin on 2017-03-11.
 */
var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET pronouns listing. */
router.get('/', function (req, res, next) {
  var collection = db.get().collection('pronouns');

  collection.find().toArray(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.get('/singular', function (req, res, next) {
  var collection = db.get().collection('pronouns');

  collection.find({"plural": {$eq: false}}).toArray(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.get('/plural', function (req, res, next) {
  var collection = db.get().collection('pronouns');

  collection.find({"plural": {$eq: true}}).toArray(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
