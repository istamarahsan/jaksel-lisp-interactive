// Generated from JakselLISP.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { RecognitionException } from 'antlr4ts/RecognitionException';
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import type { TokenStream } from 'antlr4ts/TokenStream';
import type { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import type { JakselLISPListener } from './JakselLISPListener';
import type { JakselLISPVisitor } from './JakselLISPVisitor';

export class JakselLISPParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly OPEN = 6;
	public static readonly CLOSE = 7;
	public static readonly ATOM = 8;
	public static readonly WS = 9;
	public static readonly RULE_program = 0;
	public static readonly RULE_expression = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = ['program', 'expression'];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined,
		"'jadi'",
		"'plis tambah'",
		"'plis kurang'",
		"'plis kali'",
		"'plis bagi'",
		"'plis buka'",
		"'plis tutup'"
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		'OPEN',
		'CLOSE',
		'ATOM',
		'WS'
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
		JakselLISPParser._LITERAL_NAMES,
		JakselLISPParser._SYMBOLIC_NAMES,
		[]
	);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JakselLISPParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string {
		return 'JakselLISP.g4';
	}

	// @Override
	public get ruleNames(): string[] {
		return JakselLISPParser.ruleNames;
	}

	// @Override
	public get serializedATN(): string {
		return JakselLISPParser._serializedATN;
	}

	protected createFailedPredicateException(
		predicate?: string,
		message?: string
	): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JakselLISPParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JakselLISPParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 4;
				this.match(JakselLISPParser.T__0);
				this.state = 6;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 5;
							this.expression();
						}
					}
					this.state = 8;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (
					(_la & ~0x1f) === 0 &&
					((1 << _la) &
						((1 << JakselLISPParser.T__1) |
							(1 << JakselLISPParser.T__2) |
							(1 << JakselLISPParser.T__3) |
							(1 << JakselLISPParser.T__4) |
							(1 << JakselLISPParser.OPEN) |
							(1 << JakselLISPParser.ATOM))) !==
						0
				);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JakselLISPParser.RULE_expression);
		let _la: number;
		try {
			this.state = 23;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case JakselLISPParser.ATOM:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 10;
						this.match(JakselLISPParser.ATOM);
					}
					break;
				case JakselLISPParser.T__1:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 11;
						this.match(JakselLISPParser.T__1);
					}
					break;
				case JakselLISPParser.T__2:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 12;
						this.match(JakselLISPParser.T__2);
					}
					break;
				case JakselLISPParser.T__3:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 13;
						this.match(JakselLISPParser.T__3);
					}
					break;
				case JakselLISPParser.T__4:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 14;
						this.match(JakselLISPParser.T__4);
					}
					break;
				case JakselLISPParser.OPEN:
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 15;
						this.match(JakselLISPParser.OPEN);
						this.state = 19;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (
							(_la & ~0x1f) === 0 &&
							((1 << _la) &
								((1 << JakselLISPParser.T__1) |
									(1 << JakselLISPParser.T__2) |
									(1 << JakselLISPParser.T__3) |
									(1 << JakselLISPParser.T__4) |
									(1 << JakselLISPParser.OPEN) |
									(1 << JakselLISPParser.ATOM))) !==
								0
						) {
							{
								{
									this.state = 16;
									this.expression();
								}
							}
							this.state = 21;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 22;
						this.match(JakselLISPParser.CLOSE);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		'\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\v\x1C\x04\x02' +
		'\t\x02\x04\x03\t\x03\x03\x02\x03\x02\x06\x02\t\n\x02\r\x02\x0E\x02\n\x03' +
		'\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x14\n\x03' +
		'\f\x03\x0E\x03\x17\v\x03\x03\x03\x05\x03\x1A\n\x03\x03\x03\x02\x02\x02' +
		'\x04\x02\x02\x04\x02\x02\x02\x02 \x02\x06\x03\x02\x02\x02\x04\x19\x03' +
		'\x02\x02\x02\x06\b\x07\x03\x02\x02\x07\t\x05\x04\x03\x02\b\x07\x03\x02' +
		'\x02\x02\t\n\x03\x02\x02\x02\n\b\x03\x02\x02\x02\n\v\x03\x02\x02\x02\v' +
		'\x03\x03\x02\x02\x02\f\x1A\x07\n\x02\x02\r\x1A\x07\x04\x02\x02\x0E\x1A' +
		'\x07\x05\x02\x02\x0F\x1A\x07\x06\x02\x02\x10\x1A\x07\x07\x02\x02\x11\x15' +
		'\x07\b\x02\x02\x12\x14\x05\x04\x03\x02\x13\x12\x03\x02\x02\x02\x14\x17' +
		'\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15\x16\x03\x02\x02\x02\x16\x18' +
		'\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x18\x1A\x07\t\x02\x02\x19\f\x03' +
		'\x02\x02\x02\x19\r\x03\x02\x02\x02\x19\x0E\x03\x02\x02\x02\x19\x0F\x03' +
		'\x02\x02\x02\x19\x10\x03\x02\x02\x02\x19\x11\x03\x02\x02\x02\x1A\x05\x03' +
		'\x02\x02\x02\x05\n\x15\x19';
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JakselLISPParser.__ATN) {
			JakselLISPParser.__ATN = new ATNDeserializer().deserialize(
				Utils.toCharArray(JakselLISPParser._serializedATN)
			);
		}

		return JakselLISPParser.__ATN;
	}
}

export class ProgramContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return JakselLISPParser.RULE_program;
	}
	// @Override
	public enterRule(listener: JakselLISPListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: JakselLISPListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JakselLISPVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExpressionContext extends ParserRuleContext {
	public ATOM(): TerminalNode | undefined {
		return this.tryGetToken(JakselLISPParser.ATOM, 0);
	}
	public OPEN(): TerminalNode | undefined {
		return this.tryGetToken(JakselLISPParser.OPEN, 0);
	}
	public CLOSE(): TerminalNode | undefined {
		return this.tryGetToken(JakselLISPParser.CLOSE, 0);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return JakselLISPParser.RULE_expression;
	}
	// @Override
	public enterRule(listener: JakselLISPListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JakselLISPListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JakselLISPVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
