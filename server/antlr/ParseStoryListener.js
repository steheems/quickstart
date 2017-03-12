// Generated from ParseStory.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ParseStoryParser.
function ParseStoryListener() {
  antlr4.tree.ParseTreeListener.call(this);
  return this;
}

ParseStoryListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ParseStoryListener.prototype.constructor = ParseStoryListener;

// Enter a parse tree produced by ParseStoryParser#getPronoun.
ParseStoryListener.prototype.enterGetPronoun = function (ctx) {
};

// Exit a parse tree produced by ParseStoryParser#getPronoun.
ParseStoryListener.prototype.exitGetPronoun = function (ctx) {
};

// Enter a parse tree produced by ParseStoryParser#parse.
ParseStoryListener.prototype.enterParse = function (ctx) {
};

// Exit a parse tree produced by ParseStoryParser#parse.
ParseStoryListener.prototype.exitParse = function (ctx) {
};

exports.ParseStoryListener = ParseStoryListener;
