import { BackboneElement } from "./BackboneElement.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { Element } from "./Element.ts";
import { ParticipantRequired, ParticipationStatus } from "./FhirTypes.ts";
import { Reference } from "./Reference.ts";


/**
 * Participants involved in appointment
 */
export interface AppointmentParticipant extends BackboneElement {
	/**
	 * Role of participant in the appointment
	 */
	type?: CodeableConcept[];


	/**
	 * Person, Location/HealthcareService or Device
	 */
	actor?: Reference;


	/**
	 * required | optional | information-only
	 */
	required?: ParticipantRequired;


	/**
	 * Contains extended information for property 'required'.
	 */
	_required?: Element;


	/**
	 * accepted | declined | tentative | needs-action
	 */
	status: ParticipationStatus;


	/**
	 * Contains extended information for property 'status'.
	 */
	_status?: Element;
}