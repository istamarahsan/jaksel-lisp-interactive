import {
	CharStreams,
	CommonTokenStream,
	type ANTLRErrorListener,
	Recognizer,
	RecognitionException
} from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';

import type { JakselLISPListener } from './antlr/JakselLISP/JakselLISPListener';
import {
	ExpressionContext,
	ProgramContext,
	JakselLISPParser
} from './antlr/JakselLISP/JakselLISPParser';
import { JakselLISPLexer } from './antlr/JakselLISP/JakselLISPLexer';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

class MyErrorListener implements ANTLRErrorListener<any> {
	err?: string;

	syntaxError(
		_recognizer: Recognizer<any, any>,
		_offendingSymbol: any,
		_line: number,
		_charPositionInLine: number,
		msg: string,
		_e: RecognitionException | undefined
	) {
		// Handle the error here, you can log it or send it to the client
		// console.error(`Error at line ${line}:${charPositionInLine} - ${msg}`);
		this.err = msg;
	}
}

class Listener implements JakselLISPListener {
	result: Array<string> = [];

	exitProgram(_ctx: ProgramContext) {
		// console.log(this.result.join(" "));
	}

	enterExpression(ctx: ExpressionContext) {
		const operator: string = ctx.getChild(0)?.text ?? '';

		if (operator === 'plis tambah' || operator === 'plis kurang') {
			this.result.push(operator === 'plis tambah' ? '+' : '-');
		} else if (operator === 'plis kali' || operator === 'plis bagi') {
			this.result.push(operator === 'plis kali' ? '*' : '/');
		} else if (ctx.ATOM()) {
			this.result.push(ctx.ATOM()!.toString());
		} else if (ctx.OPEN()) {
			this.result.push('(');
		}
	}

	exitExpression(ctx: ExpressionContext) {
		if (ctx.CLOSE()) {
			this.result.push(')');
		}
	}

	visitErrorNode(_node: ErrorNode) {
		// console.log("error!")
	}

	getResult(): string {
		return this.result.join(' ').replaceAll('( ', '(').replaceAll(' )', ')');
	}
}

export default function JakselToLISP(
	input: string
): { success: true; content: string } | { success: false; error: string } {
	const inputStream = CharStreams.fromString(input);
	const lexer = new JakselLISPLexer(inputStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new JakselLISPParser(tokenStream);

	const errListener = new MyErrorListener();
	parser.addErrorListener(errListener);

	const listener = new Listener();
	const tree = parser.program();

	const walker = new ParseTreeWalker();
	walker.walk(listener, tree);

	if (errListener.err !== undefined) {
		return { success: false, error: errListener.err };
	}
	return { success: true, content: listener.getResult() };
}
