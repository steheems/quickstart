/**
 * Handles connection to the MongoDB server.
 *
 * Created by erwin on 17-03-11.
 */
var MongoClient = require('mongodb').MongoClient;
var state = {
  db: null
};

exports.connect = function (url, done) {
  if (state.db) return done();

  MongoClient.connect(url, function (err, db) {
    if (err) return done(err);
    state.db = db;
    done();
  });
};

exports.get = function () {
  return state.db;
};

exports.close = function (done) {
  if (state.db) {
    state.db.close(function (err, result) {
      state.db = null;
      done(err);
    });
  }
};
