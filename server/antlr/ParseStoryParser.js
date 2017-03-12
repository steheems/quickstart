// Generated from ParseStory.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ParseStoryListener = require('./ParseStoryListener').ParseStoryListener;
var grammarFileName = "ParseStory.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
  "\u0003\n\u001a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0003",
  "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
  "\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0011\n\u0003\f\u0003\u000e",
  "\u0003\u0014\u000b\u0003\u0006\u0003\u0016\n\u0003\r\u0003\u000e\u0003",
  "\u0017\u0003\u0003\u0002\u0002\u0004\u0002\u0004\u0002\u0003\u0003\u0002",
  "\u0007\t\u0019\u0002\u0006\u0003\u0002\u0002\u0002\u0004\f\u0003\u0002",
  "\u0002\u0002\u0006\u0007\b\u0002\u0001\u0002\u0007\b\u0007\u0005\u0002",
  "\u0002\b\t\u0007\u0007\u0002\u0002\t\n\b\u0002\u0001\u0002\n\u000b\u0007",
  "\u0006\u0002\u0002\u000b\u0003\u0003\u0002\u0002\u0002\f\u0015\b\u0003",
  "\u0001\u0002\r\u000e\u0005\u0002\u0002\u0002\u000e\u0012\b\u0003\u0001",
  "\u0002\u000f\u0011\t\u0002\u0002\u0002\u0010\u000f\u0003\u0002\u0002",
  "\u0002\u0011\u0014\u0003\u0002\u0002\u0002\u0012\u0010\u0003\u0002\u0002",
  "\u0002\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0016\u0003\u0002\u0002",
  "\u0002\u0014\u0012\u0003\u0002\u0002\u0002\u0015\r\u0003\u0002\u0002",
  "\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002",
  "\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u0005\u0003\u0002\u0002",
  "\u0002\u0004\u0012\u0017"].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [null, "'<'", "'>'", "'['", "']'", null, null, "' '",
  "'''"];

var symbolicNames = [null, "LT", "GT", "BRACKET_OPEN", "BRACKET_CLOSE",
  "TEXT", "SYMBOL", "SPACE", "APOSTROPH"];

var ruleNames = ["getPronoun", "parse"];

function ParseStoryParser(input) {
  antlr4.Parser.call(this, input);
  this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
  this.ruleNames = ruleNames;
  this.literalNames = literalNames;
  this.symbolicNames = symbolicNames;
  return this;
}

ParseStoryParser.prototype = Object.create(antlr4.Parser.prototype);
ParseStoryParser.prototype.constructor = ParseStoryParser;

Object.defineProperty(ParseStoryParser.prototype, "atn", {
  get: function () {
    return atn;
  }
});

ParseStoryParser.EOF = antlr4.Token.EOF;
ParseStoryParser.LT = 1;
ParseStoryParser.GT = 2;
ParseStoryParser.BRACKET_OPEN = 3;
ParseStoryParser.BRACKET_CLOSE = 4;
ParseStoryParser.TEXT = 5;
ParseStoryParser.SYMBOL = 6;
ParseStoryParser.SPACE = 7;
ParseStoryParser.APOSTROPH = 8;

ParseStoryParser.RULE_getPronoun = 0;
ParseStoryParser.RULE_parse = 1;

function GetPronounContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = ParseStoryParser.RULE_getPronoun;
  this.pronoun = null
  this.type = null; // Token
  return this;
}

GetPronounContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GetPronounContext.prototype.constructor = GetPronounContext;

GetPronounContext.prototype.BRACKET_OPEN = function () {
  return this.getToken(ParseStoryParser.BRACKET_OPEN, 0);
};

GetPronounContext.prototype.BRACKET_CLOSE = function () {
  return this.getToken(ParseStoryParser.BRACKET_CLOSE, 0);
};

GetPronounContext.prototype.TEXT = function () {
  return this.getToken(ParseStoryParser.TEXT, 0);
};

GetPronounContext.prototype.enterRule = function (listener) {
  if (listener instanceof ParseStoryListener) {
    listener.enterGetPronoun(this);
  }
};

GetPronounContext.prototype.exitRule = function (listener) {
  if (listener instanceof ParseStoryListener) {
    listener.exitGetPronoun(this);
  }
};

ParseStoryParser.GetPronounContext = GetPronounContext;

ParseStoryParser.prototype.getPronoun = function () {

  var localctx = new GetPronounContext(this, this._ctx, this.state);
  this.enterRule(localctx, 0, ParseStoryParser.RULE_getPronoun);
  try {
    this.enterOuterAlt(localctx, 1);
    localctx.pronoun = ""
    this.state = 5;
    this.match(ParseStoryParser.BRACKET_OPEN);
    this.state = 6;
    localctx.type = this.match(ParseStoryParser.TEXT);
    localctx.pronoun += (localctx.type === null ? null : localctx.type.text);
    this.state = 8;
    this.match(ParseStoryParser.BRACKET_CLOSE);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function ParseContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = ParseStoryParser.RULE_parse;
  this.pronouns = null
  this.pronoun = null; // GetPronounContext
  return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.getPronoun = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(GetPronounContext);
  } else {
    return this.getTypedRuleContext(GetPronounContext, i);
  }
};

ParseContext.prototype.SPACE = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(ParseStoryParser.SPACE);
  } else {
    return this.getToken(ParseStoryParser.SPACE, i);
  }
};

ParseContext.prototype.TEXT = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(ParseStoryParser.TEXT);
  } else {
    return this.getToken(ParseStoryParser.TEXT, i);
  }
};

ParseContext.prototype.SYMBOL = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(ParseStoryParser.SYMBOL);
  } else {
    return this.getToken(ParseStoryParser.SYMBOL, i);
  }
};

ParseContext.prototype.enterRule = function (listener) {
  if (listener instanceof ParseStoryListener) {
    listener.enterParse(this);
  }
};

ParseContext.prototype.exitRule = function (listener) {
  if (listener instanceof ParseStoryListener) {
    listener.exitParse(this);
  }
};

ParseStoryParser.ParseContext = ParseContext;

ParseStoryParser.prototype.parse = function () {

  var localctx = new ParseContext(this, this._ctx, this.state);
  this.enterRule(localctx, 2, ParseStoryParser.RULE_parse);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    localctx.pronouns = []
    this.state = 19;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    do {
      this.state = 11;
      localctx.pronoun = this.getPronoun();
      localctx.pronouns.push(localctx.pronoun.pronoun);
      this.state = 16;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParseStoryParser.TEXT) | (1 << ParseStoryParser.SYMBOL) | (1 << ParseStoryParser.SPACE))) !== 0)) {
        this.state = 13;
        _la = this._input.LA(1);
        if (!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParseStoryParser.TEXT) | (1 << ParseStoryParser.SYMBOL) | (1 << ParseStoryParser.SPACE))) !== 0))) {
          this._errHandler.recoverInline(this);
        }
        else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 18;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 21;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    } while (_la === ParseStoryParser.BRACKET_OPEN);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

exports.ParseStoryParser = ParseStoryParser;
