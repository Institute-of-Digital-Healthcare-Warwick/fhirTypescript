import { Coding } from "./Coding.ts";
import { Element } from "./Element.ts";


/**
 * Concept - reference to a terminology or just  text
 */
export interface CodeableConcept extends Element {
	/**
	 * Code defined by a terminology system
	 */
	coding?: Coding[];


	/**
	 * Plain text representation of the concept
	 */
	text?: string;


	/**
	 * Contains extended information for property 'text'.
	 */
	_text?: Element;
    
    /**
     * Skip SIS transformation
     */
    sisIgnore?: boolean;
}