import { Attachment } from "./Attachment.ts";
import { BackboneElement } from "./BackboneElement.ts";
import { Coding } from "./Coding.ts";
import { Element } from "./Element.ts";
import { date, dateTime, decimal, integer, time, uri } from "../Types/FhirTypes.ts";
import { Quantity } from "./Quantity.ts";
import { QuestionnaireResponseItem } from "./QuestionnaireResponseItem.ts";
import { Reference } from "./Reference.ts";


/**
 * The response(s) to the question
 */
export interface QuestionnaireResponseItemAnswer extends BackboneElement {
	/**
	 * Single-valued answer to the question
	 */
	valueBoolean?: boolean;


	/**
	 * Contains extended information for property 'valueBoolean'.
	 */
	_valueBoolean?: Element;


	/**
	 * Single-valued answer to the question
	 */
	valueDecimal?: decimal;


	/**
	 * Contains extended information for property 'valueDecimal'.
	 */
	_valueDecimal?: Element;


	/**
	 * Single-valued answer to the question
	 */
	valueInteger?: integer;


	/**
	 * Contains extended information for property 'valueInteger'.
	 */
	_valueInteger?: Element;


	/**
	 * Single-valued answer to the question
	 */
	valueDate?: date;


	/**
	 * Contains extended information for property 'valueDate'.
	 */
	_valueDate?: Element;


	/**
	 * Single-valued answer to the question
	 */
	valueDateTime?: dateTime;


	/**
	 * Contains extended information for property 'valueDateTime'.
	 */
	_valueDateTime?: Element;


	/**
	 * Single-valued answer to the question
	 */
	valueTime?: time;


	/**
	 * Contains extended information for property 'valueTime'.
	 */
	_valueTime?: Element;


	/**
	 * Single-valued answer to the question
	 */
	valueString?: string;


	/**
	 * Contains extended information for property 'valueString'.
	 */
	_valueString?: Element;


	/**
	 * Single-valued answer to the question
	 */
	valueUri?: uri;


	/**
	 * Contains extended information for property 'valueUri'.
	 */
	_valueUri?: Element;


	/**
	 * Single-valued answer to the question
	 */
	valueAttachment?: Attachment;


	/**
	 * Single-valued answer to the question
	 */
	valueCoding?: Coding;


	/**
	 * Single-valued answer to the question
	 */
	valueQuantity?: Quantity;


	/**
	 * Single-valued answer to the question
	 */
	valueReference?: Reference;


	/**
	 * Nested groups and questions
	 */
	item?: QuestionnaireResponseItem[];
}