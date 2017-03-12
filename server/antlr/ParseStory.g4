grammar ParseStory;

/*
  PARSER RULES
*/

getPronoun returns[pronoun] :
  {$pronoun="";}
  BRACKET_OPEN
  type=TEXT     {$pronoun+=$type.text;}
  BRACKET_CLOSE;

parse returns[pronouns] :
  {$pronouns = [];}
  (
    pronoun=getPronoun {$pronouns.push($pronoun.pronoun);}
    (SPACE
    |TEXT
    |SYMBOL
    )*
  )+;

/*
  LEXER RULES
*/
LT : '<';

GT : '>';

BRACKET_OPEN : '[';

BRACKET_CLOSE : ']';

TEXT : ('A'..'Z'|'a'..'z'|'0'..'9')+;

SYMBOL : ~('A'..'Z'|'a'..'z'|'0'..'9'|'['|']')+;

SPACE : ' ';

APOSTROPH : '\'';
