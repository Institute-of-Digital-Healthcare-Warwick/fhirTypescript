import { code } from "../Types/FhirTypes.ts";
import { BackboneElement } from "./BackboneElement.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { Coding } from "./Coding.ts";
import { Period } from "./Period.ts";


/**
 * Constraints to the base Consent.policyRule
 */
export interface ConsentProvision extends BackboneElement {
	/**
	 * deny | permit
	 */
	type?: code;


	/**
	 * Timeframe for this rule
	 */
	period?: Period;


	/**
	 * e.g. Resource Type, Profile, CDA, etc.
	 */
	class?: Coding[];


	/**
	 * 	e.g. LOINC or SNOMED CT code, etc. in the content
	 */
	code?: CodeableConcept[];
}