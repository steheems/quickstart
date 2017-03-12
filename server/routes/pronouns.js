/**
 * Router for the pronouns collection.
 *
 * Created by erwin on 2017-03-11.
 */
var express = require('express');
var router = express.Router();
var db = require('../db');
var ObjectID = require('mongodb').ObjectID;
var antlr4 = require('antlr4/index');
var ParseStoryLexer = require('../antlr/ParseStoryLexer');
var ParseStoryParser = require('../antlr/ParseStoryParser');

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
  } else if (req.query['antlr']) {
    var input = '[subject] is being tested.';
    var chars = new antlr4.InputStream(input);
    var lexer = new ParseStoryLexer.ParseStoryLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new ParseStoryParser.ParseStoryParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.parse();
    console.log(tree);
    if (tree.exception) {
      res.send(tree.exception);
    } else {
      res.send(tree.pronouns);
    }
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
