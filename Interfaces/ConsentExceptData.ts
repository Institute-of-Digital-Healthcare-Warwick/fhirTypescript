import { BackboneElement } from "./BackboneElement.ts";
import { Element } from "./Element.ts";
import { ConsentDataMeaning } from "../Types/FhirTypes.ts";
import { Reference } from "./Reference.ts";


/**
 * Data controlled by this exception
 */
export interface ConsentExceptData extends BackboneElement {
	/**
	 * instance | related | dependents | authoredby
	 */
	meaning: ConsentDataMeaning;


	/**
	 * Contains extended information for property 'meaning'.
	 */
	_meaning?: Element;


	/**
	 * The actual data reference
	 */
	reference: Reference;
}