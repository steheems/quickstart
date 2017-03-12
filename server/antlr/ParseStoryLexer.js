// Generated from ParseStory.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
  "\u0002\n)\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
  "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
  "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
  "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0006\u0006",
  "\u001d\n\u0006\r\u0006\u000e\u0006\u001e\u0003\u0007\u0006\u0007\"\n",
  "\u0007\r\u0007\u000e\u0007#\u0003\b\u0003\b\u0003\t\u0003\t\u0002\u0002",
  "\n\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
  "\t\u0011\n\u0003\u0002\u0004\u0005\u00022;C\\c|\u0006\u00022;C]__c|",
  "*\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
  "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
  "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
  "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
  "\u0002\u0003\u0013\u0003\u0002\u0002\u0002\u0005\u0015\u0003\u0002\u0002",
  "\u0002\u0007\u0017\u0003\u0002\u0002\u0002\t\u0019\u0003\u0002\u0002",
  "\u0002\u000b\u001c\u0003\u0002\u0002\u0002\r!\u0003\u0002\u0002\u0002",
  "\u000f%\u0003\u0002\u0002\u0002\u0011\'\u0003\u0002\u0002\u0002\u0013",
  "\u0014\u0007>\u0002\u0002\u0014\u0004\u0003\u0002\u0002\u0002\u0015",
  "\u0016\u0007@\u0002\u0002\u0016\u0006\u0003\u0002\u0002\u0002\u0017",
  "\u0018\u0007]\u0002\u0002\u0018\b\u0003\u0002\u0002\u0002\u0019\u001a",
  "\u0007_\u0002\u0002\u001a\n\u0003\u0002\u0002\u0002\u001b\u001d\t\u0002",
  "\u0002\u0002\u001c\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002",
  "\u0002\u0002\u001e\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002",
  "\u0002\u0002\u001f\f\u0003\u0002\u0002\u0002 \"\n\u0003\u0002\u0002",
  "! \u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#!\u0003\u0002",
  "\u0002\u0002#$\u0003\u0002\u0002\u0002$\u000e\u0003\u0002\u0002\u0002",
  "%&\u0007\"\u0002\u0002&\u0010\u0003\u0002\u0002\u0002\'(\u0007)\u0002",
  "\u0002(\u0012\u0003\u0002\u0002\u0002\u0005\u0002\u001e#\u0002"].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

function ParseStoryLexer(input) {
  antlr4.Lexer.call(this, input);
  this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
  return this;
}

ParseStoryLexer.prototype = Object.create(antlr4.Lexer.prototype);
ParseStoryLexer.prototype.constructor = ParseStoryLexer;

ParseStoryLexer.EOF = antlr4.Token.EOF;
ParseStoryLexer.LT = 1;
ParseStoryLexer.GT = 2;
ParseStoryLexer.BRACKET_OPEN = 3;
ParseStoryLexer.BRACKET_CLOSE = 4;
ParseStoryLexer.TEXT = 5;
ParseStoryLexer.SYMBOL = 6;
ParseStoryLexer.SPACE = 7;
ParseStoryLexer.APOSTROPH = 8;

ParseStoryLexer.prototype.modeNames = ["DEFAULT_MODE"];

ParseStoryLexer.prototype.literalNames = [null, "'<'", "'>'", "'['", "']'",
  null, null, "' '", "'''"];

ParseStoryLexer.prototype.symbolicNames = [null, "LT", "GT", "BRACKET_OPEN",
  "BRACKET_CLOSE", "TEXT", "SYMBOL",
  "SPACE", "APOSTROPH"];

ParseStoryLexer.prototype.ruleNames = ["LT", "GT", "BRACKET_OPEN", "BRACKET_CLOSE",
  "TEXT", "SYMBOL", "SPACE", "APOSTROPH"];

ParseStoryLexer.prototype.grammarFileName = "ParseStory.g4";

exports.ParseStoryLexer = ParseStoryLexer;

