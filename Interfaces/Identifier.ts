import { CodeableConcept } from "./CodeableConcept.ts";
import { Element } from "./Element.ts";
import { IdentifierUse, uri } from "./FhirTypes.ts";
import { Period } from "./Period.ts";
import { Reference } from "./Reference.ts";


/**
 * An identifier intended for computation
 */
export interface Identifier extends Element {
	/**
	 * usual | official | temp | secondary (If known)
	 */
	use?: IdentifierUse;


	/**
	 * Contains extended information for property 'use'.
	 */
	_use?: Element;


	/**
	 * Description of identifier
	 */
	type?: CodeableConcept;


	/**
	 * The namespace for the identifier value
	 */
	system?: uri;


	/**
	 * Contains extended information for property 'system'.
	 */
	_system?: Element;


	/**
	 * The value that is unique
	 */
	value?: string;


	/**
	 * Contains extended information for property 'value'.
	 */
	_value?: Element;


	/**
	 * Time period when id is/was valid for use
	 */
	period?: Period;


	/**
	 * Organization that issued id (may be just text)
	 */
	assigner?: Reference;
}