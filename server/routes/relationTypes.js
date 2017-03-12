/**
 * Router for relation types.
 *
 * Created by erwin on 2017-03-12.
 */
var express = require('express');
var router = express.Router();
var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

router.get('/', function (req, res, next) {
  var collection = db.get().collection('relationTypes');

  collection.aggregate([{
    $lookup: {
      from: "relationTypes",
      localField: "oppositeId",
      foreignField: "_id",
      as: "opposite"
    }
  }]).toArray(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.get('/:id', function (req, res, next) {
  var collection = db.get().collection('relationTypes');

  collection.aggregate([{
    $lookup: {
      from: "relationTypes",
      localField: "oppositeId",
      foreignField: "_id",
      as: "opposite"
    }
  }, {
    $match: {
      _id: ObjectID(req.params.id)
    }
  }]).toArray(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
