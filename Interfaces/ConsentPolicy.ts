import { BackboneElement } from "./BackboneElement.ts";
import { Element } from "./Element.ts";
import { uri } from "./FhirTypes.ts";




/**
 * Policies covered by this consent
 */
export interface ConsentPolicy extends BackboneElement {
	/**
	 * Enforcement source for policy
	 */
	authority?: uri;


	/**
	 * Contains extended information for property 'authority'.
	 */
	_authority?: Element;


	/**
	 * Specific policy covered by this consent
	 */
	uri?: uri;


	/**
	 * Contains extended information for property 'uri'.
	 */
	_uri?: Element;
}