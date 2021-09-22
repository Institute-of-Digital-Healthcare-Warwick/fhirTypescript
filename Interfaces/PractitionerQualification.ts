import { BackboneElement } from "./BackboneElement.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { Identifier } from "./Identifier.ts";
import { Period } from "./Period.ts";
import { Reference } from "./Reference.ts";


/**
 * Qualifications obtained by training and certification
 */
export interface PractitionerQualification extends BackboneElement {
	/**
	 * An identifier for this qualification for the practitioner
	 */
	identifier?: Identifier[];


	/**
	 * Coded representation of the qualification
	 */
	code: CodeableConcept;


	/**
	 * Period during which the qualification is valid
	 */
	period?: Period;


	/**
	 * Organization that regulates and issues the qualification
	 */
	issuer?: Reference;
}