var express = require('express');
var router = express.Router();
var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/', function (req, res, next) {
  var collection = db.get().collection('users');

  collection.find().toArray(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.get('/:id', function (req, res, next) {
  var collection = db.get().collection('users');

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

router.post('/', function (req, res, next) {
  var collection = db.get().collection('users');
  var user = req.body;

  if (user instanceof Array) {
    collection.insertMany(user, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  } else {
    collection.insertOne(user, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  }
});

router.put('/', function (req, res, next) {
  var collection = db.get().collection('users');
  var user = req.body;

  collection.updateMany({}, {$set: user}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.put('/:id', function (req, res, next) {
  var collection = db.get().collection('users');
  var user = req.body;

  collection.findOneAndUpdate({
    _id: ObjectID(req.params.id)
  }, {$set: user}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.delete('/:id', function (req, res) {
  var collection = db.get().collection('users');

  collection.remove({
    _id: ObjectID(req.params.id)
  }, '', function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
