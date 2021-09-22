import { NameUse } from "../Types/FhirTypes.ts";
import { Element } from "./Element.ts";
import { Period } from "./Period.ts";


/**
 * Name of a human - parts and usage
 */
export interface HumanName extends Element {
	/**
	 * usual | official | temp | nickname | anonymous | old | maiden
	 */
	use?: NameUse;


	/**
	 * Contains extended information for property 'use'.
	 */
	_use?: Element;


	/**
	 * Text representation of the full name
	 */
	text?: string;


	/**
	 * Contains extended information for property 'text'.
	 */
	_text?: Element;


	/**
	 * Family name (often called 'Surname')
	 */
	family?: string;


	/**
	 * Contains extended information for property 'family'.
	 */
	_family?: Element;


	/**
	 * Given names (not always 'first'). Includes middle names
	 */
	given?: string[];


	/**
	 * Contains extended information for property 'given'.
	 */
	_given?: Element[];


	/**
	 * Parts that come before the name
	 */
	prefix?: string[];


	/**
	 * Contains extended information for property 'prefix'.
	 */
	_prefix?: Element[];


	/**
	 * Parts that come after the name
	 */
	suffix?: string[];


	/**
	 * Contains extended information for property 'suffix'.
	 */
	_suffix?: Element[];


	/**
	 * Time period when name was/is in use
	 */
	period?: Period;
}