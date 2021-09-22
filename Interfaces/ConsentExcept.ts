import { BackboneElement } from "./BackboneElement.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { Coding } from "./Coding.ts";
import { ConsentExceptActor } from "./ConsentExceptActor.ts";
import { ConsentExceptData } from "./ConsentExceptData.ts";
import { Element } from "./Element.ts";
import { ConsentExceptType } from "../Types/FhirTypes.ts";
import { Period } from "./Period.ts";


/**
 * Additional rule -  addition or removal of permissions
 */
export interface ConsentExcept extends BackboneElement {
	/**
	 * deny | permit
	 */
	type: ConsentExceptType;


	/**
	 * Contains extended information for property 'type'.
	 */
	_type?: Element;


	/**
	 * Timeframe for this exception
	 */
	period?: Period;


	/**
	 * Who|what controlled by this exception (or group, by role)
	 */
	actor?: ConsentExceptActor[];


	/**
	 * Actions controlled by this exception
	 */
	action?: CodeableConcept[];


	/**
	 * Security Labels that define affected resources
	 */
	securityLabel?: Coding[];


	/**
	 * Context of activities covered by this exception
	 */
	purpose?: Coding[];


	/**
	 * e.g. Resource Type, Profile, or CDA etc
	 */
	class?: Coding[];


	/**
	 * e.g. LOINC or SNOMED CT code, etc in the content
	 */
	code?: Coding[];


	/**
	 * Timeframe for data controlled by this exception
	 */
	dataPeriod?: Period;


	/**
	 * Data controlled by this exception
	 */
	data?: ConsentExceptData[];
}