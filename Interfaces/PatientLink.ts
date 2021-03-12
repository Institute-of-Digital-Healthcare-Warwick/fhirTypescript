import { BackboneElement } from "./BackboneElement.ts";
import { Element } from "./Element.ts";
import { LinkType } from "./FhirTypes.ts";
import { Reference } from "./Reference.ts";




/**
 * Link to another patient resource that concerns the same actual person
 */
export interface PatientLink extends BackboneElement {
	/**
	 * The other patient or related person resource that the link refers to
	 */
	other: Reference;


	/**
	 * replaced-by | replaces | refer | seealso - type of link
	 */
	type: LinkType;


	/**
	 * Contains extended information for property 'type'.
	 */
	_type?: Element;
}