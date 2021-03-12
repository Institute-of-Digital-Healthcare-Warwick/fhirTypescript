import { Element } from "./Element.ts";
import { ContactPointSystem, ContactPointUse, positiveInt } from "./FhirTypes.ts";
import { Period } from "./Period.ts";


/**
 * Details of a Technology mediated contact point (phone, fax, email, etc.)
 */
export interface ContactPoint extends Element {
	/**
	 * phone | fax | email | pager | url | sms | other
	 */
	system?: ContactPointSystem;


	/**
	 * Contains extended information for property 'system'.
	 */
	_system?: Element;


	/**
	 * The actual contact point details
	 */
	value?: string;


	/**
	 * Contains extended information for property 'value'.
	 */
	_value?: Element;


	/**
	 * home | work | temp | old | mobile - purpose of this contact point
	 */
	use?: ContactPointUse;


	/**
	 * Contains extended information for property 'use'.
	 */
	_use?: Element;


	/**
	 * Specify preferred order of use (1 = highest)
	 */
	rank?: positiveInt;


	/**
	 * Contains extended information for property 'rank'.
	 */
	_rank?: Element;


	/**
	 * Time period when the contact point was/is in use
	 */
	period?: Period;
}