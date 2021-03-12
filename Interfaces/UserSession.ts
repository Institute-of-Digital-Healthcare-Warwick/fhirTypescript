import { DomainResource } from "./DomainResource.ts";
import { instant } from "./FhirTypes.ts";
import { Identifier } from "./Identifier.ts";
import { Practitioner } from "./Practitioner.ts";
import { Reference } from "./Reference.ts";
import { UserSessionStatus } from "./UserSessionStatus.ts";


/**
 * From FHIR v3.2.0
 * 
 * The UserSession resource is used to represent a user's session with a server.
 */
export interface UserSession extends DomainResource {
	/**
	 * Elements defined in Ancestors: id, meta, implicitRules, language, text, contained, extension, modifierExtension
	 * Business identifier
	 */
	identifier?: Identifier[];


	/**
	 * User engaged in the session
	 */
	user: Reference;


	/**
	 * Status of the session
	 */
	status: UserSessionStatus;


	/**
	 * Where is the session
	 */
	workstation?: Identifier;


	/**
	 * What is the user's current focus
	 */
	focus: Reference;


	/**
	 * When was the session created
	 */
	created: instant;


	/**
	 * When does the session expire
	 */
	expire: instant;
}