import { NarrativeStatus } from "../Types/FhirTypes.ts";
import { Element } from "./Element.ts";


/**
 * A human-readable formatted text, including images
 */
export interface Narrative extends Element {
	/**
	 * generated | extensions | additional | empty
	 */
	status: NarrativeStatus;


	/**
	 * Contains extended information for property 'status'.
	 */
	_status?: Element;


	/**
	 * Limited xhtml content
	 */
	div: string;


	/**
	 * Contains extended information for property 'div'.
	 */
	_div?: Element;
}