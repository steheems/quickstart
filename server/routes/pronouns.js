/**
 * Router for the pronouns collection.
 *
 * Created by erwin on 2017-03-11.
 */
var express = require('express');
var router = express.Router();
var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

/* GET pronouns listing. */
router.get('/', function (req, res, next) {
  var collection = db.get().collection('pronouns');

  if (req.query['singular']) {
    collection.find({"plural": {$eq: false}}).toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  } else if (req.query['plural']) {
    collection.find({"plural": {$eq: true}}).toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  } else {
    collection.find().toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  }
});

router.get('/:id', function (req, res, next) {
  var collection = db.get().collection('pronouns');

  collection.findOne({
    _id: ObjectID(req.params.id)
  }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
