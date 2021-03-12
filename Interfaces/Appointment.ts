import { AppointmentParticipant } from "./AppointmentParticipation.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { DomainResource } from "./DomainResource.ts";
import { Element } from "./Element.ts";
import { AppointmentStatus, unsignedInt, instant, positiveInt, dateTime } from "./FhirTypes.ts";
import { Identifier } from "./Identifier.ts";
import { Period } from "./Period.ts";
import { Reference } from "./Reference.ts";




/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s)
 */
export interface Appointment extends DomainResource {
	/**
	 * External Ids for this item
	 */
	identifier?: Identifier[];


	/**
	 * proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error
	 */
	status: AppointmentStatus;


	/**
	 * Contains extended information for property 'status'.
	 */
	_status?: Element;


	/**
	 * A broad categorization of the service that is to be performed during this appointment
	 */
	serviceCategory?: CodeableConcept[];


	/**
	 * The specific service that is to be performed during this appointment
	 */
	serviceType?: CodeableConcept[];


	/**
	 * The specialty of a practitioner that would be required to perform the service requested in this appointment
	 */
	specialty?: CodeableConcept[];


	/**
	 * The style of appointment or patient that has been booked in the slot (not service type)
	 */
	appointmentType?: CodeableConcept;


	/**
	 * Reason this appointment is scheduled
	 */
	reason?: CodeableConcept[];


	/**
	 * Reason the appointment is to takes place (resource)
	 */
	indication?: Reference[];


	/**
	 * Used to make informed decisions if needing to re-prioritize
	 */
	priority?: unsignedInt;


	/**
	 * Contains extended information for property 'priority'.
	 */
	_priority?: Element;


	/**
	 * Shown on a subject line in a meeting request, or appointment list
	 */
	description?: string;


	/**
	 * Contains extended information for property 'description'.
	 */
	_description?: Element;


	/**
	 * Additional information to support the appointment
	 */
	supportingInformation?: Reference[];


	/**
	 * When appointment is to take place
	 */
	start?: instant;


	/**
	 * Contains extended information for property 'start'.
	 */
	_start?: Element;


	/**
	 * When appointment is to conclude
	 */
	end?: instant;


	/**
	 * Contains extended information for property 'end'.
	 */
	_end?: Element;


	/**
	 * Can be less than start/end (e.g. estimate)
	 */
	minutesDuration?: positiveInt;


	/**
	 * Contains extended information for property 'minutesDuration'.
	 */
	_minutesDuration?: Element;


	/**
	 * The slots that this appointment is filling
	 */
	slot?: Reference[];


	/**
	 * The date that this appointment was initially created
	 */
	created?: dateTime;


	/**
	 * Contains extended information for property 'created'.
	 */
	_created?: Element;


	/**
	 * Additional comments
	 */
	comment?: string;


	/**
	 * Contains extended information for property 'comment'.
	 */
	_comment?: Element;


	/**
	 * The ReferralRequest provided as information to allocate to the Encounter
	 */
	incomingReferral?: Reference[];


	/**
	 * Participants involved in appointment
	 */
	participant: AppointmentParticipant[];


	/**
	 * Potential date/time interval(s) requested to allocate the appointment within
	 */
	requestedPeriod?: Period[];
}