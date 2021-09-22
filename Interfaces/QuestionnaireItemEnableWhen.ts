import { Attachment } from "./Attachment.ts";
import { BackboneElement } from "./BackboneElement.ts";
import { Coding } from "./Coding.ts";
import { Element } from "./Element.ts";
import { date, dateTime, decimal, integer, time, uri } from "../Types/FhirTypes.ts";
import { Quantity } from "./Quantity.ts";
import { Reference } from "./Reference.ts";


/**
 * Only allow data when
 */
export interface QuestionnaireItemEnableWhen extends BackboneElement {
	/**
	 * Question that determines whether item is enabled
	 */
	question: string;


	/**
	 * Contains extended information for property 'question'.
	 */
	_question?: Element;


	/**
	 * Enable when answered or not
	 */
	hasAnswer?: boolean;


	/**
	 * Contains extended information for property 'hasAnswer'.
	 */
	_hasAnswer?: Element;


	/**
	 * Value question must have
	 */
	answerBoolean?: boolean;


	/**
	 * Contains extended information for property 'answerBoolean'.
	 */
	_answerBoolean?: Element;


	/**
	 * Value question must have
	 */
	answerDecimal?: decimal;


	/**
	 * Contains extended information for property 'answerDecimal'.
	 */
	_answerDecimal?: Element;


	/**
	 * Value question must have
	 */
	answerInteger?: integer;


	/**
	 * Contains extended information for property 'answerInteger'.
	 */
	_answerInteger?: Element;


	/**
	 * Value question must have
	 */
	answerDate?: date;


	/**
	 * Contains extended information for property 'answerDate'.
	 */
	_answerDate?: Element;


	/**
	 * Value question must have
	 */
	answerDateTime?: dateTime;


	/**
	 * Contains extended information for property 'answerDateTime'.
	 */
	_answerDateTime?: Element;


	/**
	 * Value question must have
	 */
	answerTime?: time;


	/**
	 * Contains extended information for property 'answerTime'.
	 */
	_answerTime?: Element;


	/**
	 * Value question must have
	 */
	answerString?: string;


	/**
	 * Contains extended information for property 'answerString'.
	 */
	_answerString?: Element;


	/**
	 * Value question must have
	 */
	answerUri?: uri;


	/**
	 * Contains extended information for property 'answerUri'.
	 */
	_answerUri?: Element;


	/**
	 * Value question must have
	 */
	answerAttachment?: Attachment;


	/**
	 * Value question must have
	 */
	answerCoding?: Coding;


	/**
	 * Value question must have
	 */
	answerQuantity?: Quantity;


	/**
	 * Value question must have
	 */
	answerReference?: Reference;
}