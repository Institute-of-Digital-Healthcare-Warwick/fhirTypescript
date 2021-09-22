import { Extension } from "./Extension.ts";


/**
 * Base for all elements
 */
export interface Element {
	/**
	 * Content that would be comments in an XML.
	 */
	fhir_comments?: string[];


	/**
	 * Contains extended information for property 'fhir_comments'.
	 */
	_fhir_comments?: Element[];


	/**
	 * xml:id (or equivalent in JSON)
	 */
	id?: string;


	/**
	 * Contains extended information for property 'id'.
	 */
	_id?: Element;


	/**
	 * Additional Content defined by implementations
	 */
	extension?: Extension[];
}
