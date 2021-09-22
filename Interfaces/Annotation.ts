
import { dateTime } from "../Types/FhirTypes.ts";
import { Element } from "./Element.ts";
import { Reference } from "./Reference.ts";


/**
 * Text node with attribution
 */
export interface Annotation extends Element {
	/**
	 * Individual responsible for the annotation
	 */
	authorReference?: Reference;
	/**
	 * Individual responsible for the annotation
	 */
	authorString?: string;
	/**
	 * Contains extended information for property 'authorString'.
	 */
	_authorString?: Element;
	/**
	 * When the annotation was made
	 */
	time?: dateTime;
	/**
	 * Contains extended information for property 'time'.
	 */
	_time?: Element;
	/**
	 * The annotation  - text content
	 */
	text: string;
	/**
	 * Contains extended information for property 'text'.
	 */
	_text?: Element;
}