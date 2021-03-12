import { Address } from "./Address.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { Coding } from "./Coding.ts";
import { ContactPoint } from "./ContactPoint.ts";
import { DomainResource } from "./DomainResource.ts";
import { Element } from "./Element.ts";
import { LocationStatus, LocationMode } from "./FhirTypes.ts";
import { Identifier } from "./Identifier.ts";
import { LocationPosition } from "./LocationPosition.ts";
import { Reference } from "./Reference.ts";


/**
 * Details and position information for a physical place
 */
export interface Location extends DomainResource {
	/**
	 * Unique code or number identifying the location to its users
	 */
	identifier?: Identifier[];


	/**
	 * active | suspended | inactive
	 */
	status?: LocationStatus;


	/**
	 * Contains extended information for property 'status'.
	 */
	_status?: Element;


	/**
	 * The Operational status of the location (typically only for a bed/room)
	 */
	operationalStatus?: Coding;


	/**
	 * Name of the location as used by humans
	 */
	name?: string;


	/**
	 * Contains extended information for property 'name'.
	 */
	_name?: Element;


	/**
	 * A list of alternate names that the location is known as, or was known as in the past
	 */
	alias?: string[];


	/**
	 * Contains extended information for property 'alias'.
	 */
	_alias?: Element[];


	/**
	 * Additional details about the location that could be displayed as further information to identify the location beyond its name
	 */
	description?: string;


	/**
	 * Contains extended information for property 'description'.
	 */
	_description?: Element;


	/**
	 * instance | kind
	 */
	mode?: LocationMode;


	/**
	 * Contains extended information for property 'mode'.
	 */
	_mode?: Element;


	/**
	 * Type of function performed
	 */
	type?: CodeableConcept;


	/**
	 * Contact details of the location
	 */
	telecom?: ContactPoint[];


	/**
	 * Physical location
	 */
	address?: Address;


	/**
	 * Physical form of the location
	 */
	physicalType?: CodeableConcept;


	/**
	 * The absolute geographic location
	 */
	position?: LocationPosition;


	/**
	 * Organization responsible for provisioning and upkeep
	 */
	managingOrganization?: Reference;


	/**
	 * Another Location this one is physically part of
	 */
	partOf?: Reference;


	/**
	 * Technical endpoints providing access to services operated for the location
	 */
	endpoint?: Reference[];
}