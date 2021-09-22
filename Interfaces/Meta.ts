import { id, instant, uri } from "../Types/FhirTypes.ts";
import { Coding } from "./Coding.ts";
import { Element } from "./Element.ts";

/**
 * Metadata about a resource
 */
export interface Meta extends Element {
	/**
	 * Version specific identifier
	 */
	versionId?: id;


	/**
	 * Contains extended information for property 'versionId'.
	 */
	_versionId?: Element;


	/**
	 * When the resource version last changed
	 */
	lastUpdated?: instant;


	/**
	 * Contains extended information for property 'lastUpdated'.
	 */
	_lastUpdated?: Element;


	/**
	 * Profiles this resource claims to conform to
	 */
	profile?: uri[];


	/**
	 * Contains extended information for property 'profile'.
	 */
	_profile?: Element[];


	/**
	 * Security Labels applied to this resource
	 */
	security?: Coding[];


	/**
	 * Tags applied to this resource
	 */
	tag?: Coding[];
}