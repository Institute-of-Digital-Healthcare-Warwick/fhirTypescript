import { Address } from "./Address.ts";
import { Attachment } from "./Attachment.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { ContactPoint } from "./ContactPoint.ts";
import { DomainResource } from "./DomainResource.ts";
import { Element } from "./Element.ts";
import { AdministrativeGender, date } from "../Types/FhirTypes.ts";
import { HumanName } from "./HumanName.ts";
import { Identifier } from "./Identifier.ts";
import { PractitionerQualification } from "./PractitionerQualification.ts";


/**
 * A person with a  formal responsibility in the provisioning of healthcare or related services
 */
export interface Practitioner extends DomainResource {
	/**
	 * A identifier for the person as this agent
	 */
	identifier?: Identifier[];


	/**
	 * Whether this practitioner's record is in active use
	 */
	active?: boolean;


	/**
	 * Contains extended information for property 'active'.
	 */
	_active?: Element;


	/**
	 * The name(s) associated with the practitioner
	 */
	name?: HumanName[];


	/**
	 * A contact detail for the practitioner (that apply to all roles)
	 */
	telecom?: ContactPoint[];


	/**
	 * Address(es) of the practitioner that are not role specific (typically home address)
	 */
	address?: Address[];


	/**
	 * male | female | other | unknown
	 */
	gender?: AdministrativeGender;


	/**
	 * Contains extended information for property 'gender'.
	 */
	_gender?: Element;


	/**
	 * The date  on which the practitioner was born
	 */
	birthDate?: date;


	/**
	 * Contains extended information for property 'birthDate'.
	 */
	_birthDate?: Element;


	/**
	 * Image of the person
	 */
	photo?: Attachment[];


	/**
	 * Qualifications obtained by training and certification
	 */
	qualification?: PractitionerQualification[];


	/**
	 * A language the practitioner is able to use in patient communication
	 */
	communication?: CodeableConcept[];
}