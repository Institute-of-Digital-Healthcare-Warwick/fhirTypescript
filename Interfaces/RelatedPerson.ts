import { Address } from "./Address.ts";
import { Attachment } from "./Attachment.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { ContactPoint } from "./ContactPoint.ts";
import { DomainResource } from "./DomainResource.ts";
import { Element } from "./Element.ts";
import { AdministrativeGender, date } from "./FhirTypes.ts";
import { HumanName } from "./HumanName.ts";
import { Identifier } from "./Identifier.ts";
import { Period } from "./Period.ts";
import { Reference } from "./Reference.ts";




/**
 * An person that is related to a patient, but who is not a direct target of care
 */
export interface RelatedPerson extends DomainResource {
	/**
	 * A human identifier for this person
	 */
	identifier?: Identifier[];


	/**
	 * Whether this related person's record is in active use
	 */
	active?: boolean;


	/**
	 * Contains extended information for property 'active'.
	 */
	_active?: Element;


	/**
	 * The patient this person is related to
	 */
	patient: Reference;


	/**
	 * The nature of the relationship
	 */
	relationship?: CodeableConcept;


	/**
	 * A name associated with the person
	 */
	name?: HumanName[];


	/**
	 * A contact detail for the person
	 */
	telecom?: ContactPoint[];


	/**
	 * male | female | other | unknown
	 */
	gender?: AdministrativeGender;


	/**
	 * Contains extended information for property 'gender'.
	 */
	_gender?: Element;


	/**
	 * The date on which the related person was born
	 */
	birthDate?: date;


	/**
	 * Contains extended information for property 'birthDate'.
	 */
	_birthDate?: Element;


	/**
	 * Address where the related person can be contacted or visited
	 */
	address?: Address[];


	/**
	 * Image of the person
	 */
	photo?: Attachment[];


	/**
	 * Period of time that this relationship is considered valid
	 */
	period?: Period;
}