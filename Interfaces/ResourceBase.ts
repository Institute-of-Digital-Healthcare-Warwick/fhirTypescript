import { code,id,uri } from "../Types/FhirTypes.ts";
import { Element } from "./Element.ts";
import { Meta } from "./Meta.ts";


/**
 * Base Resource
 */
export interface ResourceBase {
	/**
	 * The type of the resource.
	 */
	resourceType?: code;


	/**
	 * Contains extended information for property 'resourceType'.
	 */
	_resourceType?: Element;


	/**
	 * Logical id of this artifact
	 */
	id?: id;


	/**
	 * Contains extended information for property 'id'.
	 */
	_id?: Element;


	/**
	 * Metadata about the resource
	 */
	meta?: Meta;


	/**
	 * A set of rules under which this content was created
	 */
	implicitRules?: uri;


	/**
	 * Contains extended information for property 'implicitRules'.
	 */
	_implicitRules?: Element;


	/**
	 * Language of the resource content
	 */
	language?: code;


	/**
	 * Contains extended information for property 'language'.
	 */
	_language?: Element;
}