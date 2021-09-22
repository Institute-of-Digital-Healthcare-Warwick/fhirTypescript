import { ContactPoint } from "./ContactPoint.ts";
import { Element } from "./Element.ts";


/**
 * Contact information
 */
export interface ContactDetail extends Element {
	/**
	 * Name of an individual to contact
	 */
	name?: string;


	/**
	 * Contains extended information for property 'name'.
	 */
	_name?: Element;


	/**
	 * Contact details for individual or organization
	 */
	telecom?: ContactPoint[];
}