import { BackboneElement } from "./BackboneElement.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { Element } from "./Element.ts";


/**
 * A list of Languages which may be used to communicate with the patient about their health
 */
export interface PatientCommunication extends BackboneElement {
	/**
	 * The language which can be used to communicate with the patient about their health
	 */
	language: CodeableConcept;


	/**
	 * Language preference indicator
	 */
	preferred?: boolean;


	/**
	 * Contains extended information for property 'preferred'.
	 */
	_preferred?: Element;
}