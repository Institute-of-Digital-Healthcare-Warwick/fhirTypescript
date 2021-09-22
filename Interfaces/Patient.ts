import { Address } from "./Address.ts";
import { Attachment } from "./Attachment.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { ContactPoint } from "./ContactPoint.ts";
import { DomainResource } from "./DomainResource.ts";
import { Element } from "./Element.ts";
import { AdministrativeGender, date, dateTime, integer } from "../Types/FhirTypes.ts";
import { HumanName } from "./HumanName.ts";
import { Identifier } from "./Identifier.ts";
import { PatientAnimal } from "./PatientAnimal.ts";
import { PatientCommunication } from "./PatientCommunication.ts";
import { PatientContact } from "./PatientContact.ts";
import { PatientLink } from "./PatientLink.ts";
import { Reference } from "./Reference.ts";


/**
 * Information about an individual or animal receiving health care services
 */
export interface Patient extends DomainResource {
	/**
	 * An identifier for this patient
	 */
	identifier?: Identifier[];


	/**
	 * Whether this patient's record is in active use
	 */
	active?: boolean;


	/**
	 * Contains extended information for property 'active'.
	 */
	_active?: Element;


	/**
	 * A name associated with the patient
	 */
	name?: HumanName[];


	/**
	 * A contact detail for the individual
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
	 * The date of birth for the individual
	 */
	birthDate?: date;


	/**
	 * Contains extended information for property 'birthDate'.
	 */
	_birthDate?: Element;


	/**
	 * Indicates if the individual is deceased or not
	 */
	deceasedBoolean?: boolean;


	/**
	 * Contains extended information for property 'deceasedBoolean'.
	 */
	_deceasedBoolean?: Element;


	/**
	 * Indicates if the individual is deceased or not
	 */
	deceasedDateTime?: dateTime;


	/**
	 * Contains extended information for property 'deceasedDateTime'.
	 */
	_deceasedDateTime?: Element;


	/**
	 * Addresses for the individual
	 */
	address?: Address[];


	/**
	 * Marital (civil) status of a patient
	 */
	maritalStatus?: CodeableConcept;


	/**
	 * Whether patient is part of a multiple birth
	 */
	multipleBirthBoolean?: boolean;


	/**
	 * Contains extended information for property 'multipleBirthBoolean'.
	 */
	_multipleBirthBoolean?: Element;


	/**
	 * Whether patient is part of a multiple birth
	 */
	multipleBirthInteger?: integer;


	/**
	 * Contains extended information for property 'multipleBirthInteger'.
	 */
	_multipleBirthInteger?: Element;


	/**
	 * Image of the patient
	 */
	photo?: Attachment[];


	/**
	 * A contact party (e.g. guardian, partner, friend) for the patient
	 */
	contact?: PatientContact[];


	/**
	 * This patient is known to be an animal (non-human)
	 */
	animal?: PatientAnimal;


	/**
	 * A list of Languages which may be used to communicate with the patient about their health
	 */
	communication?: PatientCommunication[];


	/**
	 * Patient's nominated primary care provider
	 */
	generalPractitioner?: Reference[];


	/**
	 * Organization that is the custodian of the patient record
	 */
	managingOrganization?: Reference;


	/**
	 * Link to another patient resource that concerns the same actual person
	 */
	link?: PatientLink[];
}