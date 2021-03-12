import { BackboneElement } from "./BackboneElement.ts";
import { CodeableConcept } from "./CodeableConcept.ts";




/**
 * This patient is known to be an animal (non-human)
 */
export interface PatientAnimal extends BackboneElement {
	/**
	 * E.g. Dog, Cow
	 */
	species: CodeableConcept;


	/**
	 * E.g. Poodle, Angus
	 */
	breed?: CodeableConcept;


	/**
	 * E.g. Neutered, Intact
	 */
	genderStatus?: CodeableConcept;
}