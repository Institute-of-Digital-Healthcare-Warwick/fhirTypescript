import { uri } from "../Types/FhirTypes.ts";
import { BackboneElement } from "./BackboneElement.ts";
import { Element } from "./Element.ts";
import { QuestionnaireResponseItemAnswer } from "./QuestionnaireResponseItemAnswer.ts";
import { Reference } from "./Reference.ts";


/**
 * Groups and questions
 */
export interface QuestionnaireResponseItem extends BackboneElement {
	/**
	 * Pointer to specific item from Questionnaire
	 */
	linkId: string;


	/**
	 * Contains extended information for property 'linkId'.
	 */
	_linkId?: Element;


	/**
	 * ElementDefinition - details for the item
	 */
	definition?: uri;


	/**
	 * Contains extended information for property 'definition'.
	 */
	_definition?: Element;


	/**
	 * Name for group or question text
	 */
	text?: string;


	/**
	 * Contains extended information for property 'text'.
	 */
	_text?: Element;


	/**
	 * The subject this group's answers are about
	 */
	subject?: Reference;


	/**
	 * The response(s) to the question
	 */
	answer?: QuestionnaireResponseItemAnswer[];


	/**
	 * Nested questionnaire response items
	 */
	item?: QuestionnaireResponseItem[];
}