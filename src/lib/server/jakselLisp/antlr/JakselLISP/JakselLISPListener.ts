// Generated from JakselLISP.g4 by ANTLR 4.9.0-SNAPSHOT

import { type ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { ProgramContext } from './JakselLISPParser';
import { ExpressionContext } from './JakselLISPParser';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `JakselLISPParser`.
 */
export interface JakselLISPListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JakselLISPParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `JakselLISPParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `JakselLISPParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JakselLISPParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
}
