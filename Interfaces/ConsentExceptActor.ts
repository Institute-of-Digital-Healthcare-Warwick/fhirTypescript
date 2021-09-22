import { BackboneElement } from "./BackboneElement.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { Reference } from "./Reference.ts";


/**
 * Who|what controlled by this exception (or group, by role)
 */
export interface ConsentExceptActor extends BackboneElement {
	/**
	 * How the actor is involved
	 */
	role: CodeableConcept;


	/**
	 * Resource for the actor (or group, by role)
	 */
	reference: Reference;
}