import { Attachment } from "./Attachment.ts";
import { BackboneElement } from "./BackboneElement.ts";
import { Coding } from "./Coding.ts";
import { Element } from "./Element.ts";
import { date, dateTime, decimal, integer, QuestionnaireItemType, time, uri } from "../Types/FhirTypes.ts";
import { Quantity } from "./Quantity.ts";
import { QuestionnaireItemEnableWhen } from "./QuestionnaireItemEnableWhen.ts";
import { QuestionnaireItemAnswerOption } from "./QuestionnaireItemAnswerOption.ts";
import { Reference } from "./Reference.ts";


/**
 * Questions and sections within the Questionnaire
 */
export interface QuestionnaireItem extends BackboneElement {
	/**
	 * Unique id for item in questionnaire
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
	 * Corresponding concept for this item in a terminology
	 */
	code?: Coding[];


	/**
	 * E.g. "1(a)", "2.5.3"
	 */
	prefix?: string;


	/**
	 * Contains extended information for property 'prefix'.
	 */
	_prefix?: Element;


	/**
	 * Primary text for the item
	 */
	text?: string;


	/**
	 * Contains extended information for property 'text'.
	 */
	_text?: Element;


	/**
	 * group | display | boolean | decimal | integer | date | dateTime +
	 */
	type: QuestionnaireItemType;


	/**
	 * Contains extended information for property 'type'.
	 */
	_type?: Element;


	/**
	 * Only allow data when
	 */
	enableWhen?: QuestionnaireItemEnableWhen[];


	/**
	 * Whether the item must be included in data results
	 */
	required?: boolean;


	/**
	 * Contains extended information for property 'required'.
	 */
	_required?: Element;


	/**
	 * Whether the item may repeat
	 */
	repeats?: boolean;


	/**
	 * Contains extended information for property 'repeats'.
	 */
	_repeats?: Element;


	/**
	 * Don't allow human editing
	 */
	readOnly?: boolean;


	/**
	 * Contains extended information for property 'readOnly'.
	 */
	_readOnly?: Element;


	/**
	 * No more than this many characters
	 */
	maxLength?: integer;


	/**
	 * Contains extended information for property 'maxLength'.
	 */
	_maxLength?: Element;


	/**
	 * Permitted answer
	 */
	answerOption?: QuestionnaireItemAnswerOption[];


	/**
	 * Valueset containing permitted answers
	 */
	answerValueSet?: uri;


	/**
	 * Default value when item is first rendered
	 */
	initialBoolean?: boolean;


	/**
	 * Contains extended information for property 'initialBoolean'.
	 */
	_initialBoolean?: Element;


	/**
	 * Default value when item is first rendered
	 */
	initialDecimal?: decimal;


	/**
	 * Contains extended information for property 'initialDecimal'.
	 */
	_initialDecimal?: Element;


	/**
	 * Default value when item is first rendered
	 */
	initialInteger?: integer;


	/**
	 * Contains extended information for property 'initialInteger'.
	 */
	_initialInteger?: Element;


	/**
	 * Default value when item is first rendered
	 */
	initialDate?: date;


	/**
	 * Contains extended information for property 'initialDate'.
	 */
	_initialDate?: Element;


	/**
	 * Default value when item is first rendered
	 */
	initialDateTime?: dateTime;


	/**
	 * Contains extended information for property 'initialDateTime'.
	 */
	_initialDateTime?: Element;


	/**
	 * Default value when item is first rendered
	 */
	initialTime?: time;


	/**
	 * Contains extended information for property 'initialTime'.
	 */
	_initialTime?: Element;


	/**
	 * Default value when item is first rendered
	 */
	initialString?: string;


	/**
	 * Contains extended information for property 'initialString'.
	 */
	_initialString?: Element;


	/**
	 * Default value when item is first rendered
	 */
	initialUri?: uri;


	/**
	 * Contains extended information for property 'initialUri'.
	 */
	_initialUri?: Element;


	/**
	 * Default value when item is first rendered
	 */
	initialAttachment?: Attachment;


	/**
	 * Default value when item is first rendered
	 */
	initialCoding?: Coding;


	/**
	 * Default value when item is first rendered
	 */
	initialQuantity?: Quantity;


	/**
	 * Default value when item is first rendered
	 */
	initialReference?: Reference;


	/**
	 * Nested questionnaire items
	 */
	item?: QuestionnaireItem[];
}
