import { Address } from "./Address.ts";
import { BackboneElement } from "./BackboneElement.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { ContactPoint } from "./ContactPoint.ts";
import { Element } from "./Element.ts";
import { AdministrativeGender } from "../Types/FhirTypes.ts";
import { HumanName } from "./HumanName.ts";
import { Period } from "./Period.ts";
import { Reference } from "./Reference.ts";


/**
 * A contact party (e.g. guardian, partner, friend) for the patient
 */
export interface PatientContact extends BackboneElement {
	/**
	 * The kind of relationship
	 */
	relationship?: CodeableConcept[];


	/**
	 * A name associated with the contact person
	 */
	name?: HumanName;


	/**
	 * A contact detail for the person
	 */
	telecom?: ContactPoint[];


	/**
	 * Address for the contact person
	 */
	address?: Address;


	/**
	 * male | female | other | unknown
	 */
	gender?: AdministrativeGender;


	/**
	 * Contains extended information for property 'gender'.
	 */
	_gender?: Element;


	/**
	 * Organization that is associated with the contact
	 */
	organization?: Reference;


	/**
	 * The period during which this contact person or organization is valid to be contacted relating to this patient
	 */
	period?: Period;
}