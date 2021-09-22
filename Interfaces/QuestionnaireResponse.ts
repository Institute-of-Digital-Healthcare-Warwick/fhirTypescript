import { DomainResource } from "./DomainResource.ts";
import { Element } from "./Element.ts";
import { dateTime, QuestionnaireResponseStatus } from "../Types/FhirTypes.ts";
import { Identifier } from "./Identifier.ts";
import { QuestionnaireResponseItem } from "./QuestionnaireResponseItem.ts";
import { Reference } from "./Reference.ts";


/**
 * A structured set of questions and their answers
 */
export interface QuestionnaireResponse extends DomainResource {
	/**
	 * Unique id for this set of answers
	 */
	identifier?: Identifier;


	/**
	 * Request fulfilled by this QuestionnaireResponse
	 */
	basedOn?: Reference[];


	/**
	 * Part of this action
	 */
	parent?: Reference[];


	/**
	 * Form being answered
	 */
	questionnaire?: Reference;


	/**
	 * in-progress | completed | amended | entered-in-error | stopped
	 */
	status: QuestionnaireResponseStatus;


	/**
	 * Contains extended information for property 'status'.
	 */
	_status?: Element;


	/**
	 * The subject of the questions
	 */
	subject?: Reference;


	/**
	 * Encounter or Episode during which questionnaire was completed
	 */
	context?: Reference;


	/**
	 * Date the answers were gathered
	 */
	authored?: dateTime;


	/**
	 * Contains extended information for property 'authored'.
	 */
	_authored?: Element;


	/**
	 * Person who received and recorded the answers
	 */
	author?: Reference;


	/**
	 * The person who answered the questions
	 */
	source?: Reference;


	/**
	 * Groups and questions
	 */
	item?: QuestionnaireResponseItem[];
}