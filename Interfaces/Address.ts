import { Element } from "./Element.ts";
import { AddressType, AddressUse } from "./FhirTypes.ts";
import { Period } from "./Period.ts";


/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats)
 */
export interface Address extends Element {
	/**
	 * home | work | temp | old - purpose of this address
	 */
	use?: AddressUse;


	/**
	 * Contains extended information for property 'use'.
	 */
	_use?: Element;


	/**
	 * postal | physical | both
	 */
	type?: AddressType;


	/**
	 * Contains extended information for property 'type'.
	 */
	_type?: Element;


	/**
	 * Text representation of the address
	 */
	text?: string;


	/**
	 * Contains extended information for property 'text'.
	 */
	_text?: Element;


	/**
	 * Street name, number, direction & P.O. Box etc.
	 */
	line?: string[];


	/**
	 * Contains extended information for property 'line'.
	 */
	_line?: Element[];


	/**
	 * Name of city, town etc.
	 */
	city?: string;


	/**
	 * Contains extended information for property 'city'.
	 */
	_city?: Element;


	/**
	 * District name (aka county)
	 */
	district?: string;


	/**
	 * Contains extended information for property 'district'.
	 */
	_district?: Element;


	/**
	 * Sub-unit of country (abbreviations ok)
	 */
	state?: string;


	/**
	 * Contains extended information for property 'state'.
	 */
	_state?: Element;


	/**
	 * Postal code for area
	 */
	postalCode?: string;


	/**
	 * Contains extended information for property 'postalCode'.
	 */
	_postalCode?: Element;


	/**
	 * Country (e.g. can be ISO 3166 2 or 3 letter code)
	 */
	country?: string;


	/**
	 * Contains extended information for property 'country'.
	 */
	_country?: Element;


	/**
	 * Time period when address was/is in use
	 */
	period?: Period;
}