
grammar JakselLISP;

program: 'jadi' expression+;

expression: ATOM 
          | 'plis tambah' | 'plis kurang'
          | 'plis kali' | 'plis bagi'
          | OPEN expression* CLOSE;

OPEN: 'plis buka';
CLOSE: 'plis tutup';
ATOM: [a-zA-Z0-9]+;
WS: [ \t\r\n]+ -> skip;
