// Generated from JakselLISP.g4 by ANTLR 4.9.0-SNAPSHOT

import { type ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { ProgramContext } from './JakselLISPParser';
import { ExpressionContext } from './JakselLISPParser';

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JakselLISPParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JakselLISPVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `JakselLISPParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `JakselLISPParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}
