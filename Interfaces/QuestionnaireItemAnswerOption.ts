import { integer,date,time } from "../Types/FhirTypes.ts";
import { BackboneElement } from "./BackboneElement.ts";
import { Coding } from "./Coding.ts";
import { Element } from "./Element.ts";


/**
 * Permitted answer
 */
export interface QuestionnaireItemAnswerOption extends BackboneElement {
	/**
	 * Answer value
	 */
	valueInteger?: integer;


	/**
	 * Contains extended information for property 'valueInteger'.
	 */
	_valueInteger?: Element;


	/**
	 * Answer value
	 */
	valueDate?: date;


	/**
	 * Contains extended information for property 'valueDate'.
	 */
	_valueDate?: Element;


	/**
	 * Answer value
	 */
	valueTime?: time;


	/**
	 * Contains extended information for property 'valueTime'.
	 */
	_valueTime?: Element;


	/**
	 * Answer value
	 */
	valueString?: string;


	/**
	 * Contains extended information for property 'valueString'.
	 */
	_valueString?: Element;


	/**
	 * Answer value
	 */
	valueCoding?: Coding;
}