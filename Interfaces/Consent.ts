import { Attachment } from "./Attachment.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { Coding } from "./Coding.ts";
import { ConsentActor } from "./ConsentActor.ts";
import { ConsentData } from "./ConsentData.ts";
import { ConsentExcept } from "./ConsentExcept.ts";
import { ConsentPolicy } from "./ConsentPolicy.ts";
import { DomainResource } from "./DomainResource.ts";
import { Element } from "./Element.ts";
import { ConsentState, dateTime, uri } from "./FhirTypes.ts";
import { Identifier } from "./Identifier.ts";
import { Period } from "./Period.ts";
import { Reference } from "./Reference.ts";


/**
 * A healthcare consumer's policy choices to permits or denies recipients or roles to perform actions for specific purposes and periods of time
 */
export interface Consent extends DomainResource {
	/**
	 * Identifier for this record (external references)
	 */
	identifier?: Identifier;


	/**
	 * draft | proposed | active | rejected | inactive | entered-in-error
	 */
	status: ConsentState;


	/**
	 * Contains extended information for property 'status'.
	 */
	_status?: Element;


	/**
	 * Which of the four areas this resource covers (extensible)
	 */
	scope?: CodeableConcept;


	/**
	 * Classification of the consent statement - for indexing/retrieval
	 */
	category?: CodeableConcept[];


	/**
	 * Who the consent applies to
	 */
	patient: Reference;


	/**
	 * When this Consent was created or indexed
	 */
	dateTime?: dateTime;


	/**
	 * Contains extended information for property 'dateTime'.
	 */
	_dateTime?: Element;


	/**
	 * Custodian of the consent
	 */
	organization?: Reference[];


	/**
	 * Source from which this consent is taken
	 */
	sourceAttachment?: Attachment;


	/**
	 * Source from which this consent is taken
	 */
	sourceIdentifier?: Identifier;


	/**
	 * Source from which this consent is taken
	 */
	sourceReference?: Reference;


	/**
	 * Policies covered by this consent
	 */
	policy?: ConsentPolicy[];


	/**
	 * Regulation that this consents to
	 */
	policyRule?: CodeableConcept;


	/**
	 * Constraints to the base Consent.policyRule
	 */
	provision?: CodeableConcept;
}