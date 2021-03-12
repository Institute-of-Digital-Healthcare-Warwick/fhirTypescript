import { BackboneElement } from "./BackboneElement.ts";
import { code } from "./FhirTypes.ts";


/**
 * From FHIR v3.2.0
 * 
 * Status of the session
 */
export interface UserSessionStatus extends BackboneElement {
	/**
	 * activating | active | suspended | closing | closed
	 */
	code: code;


	/**
	 * user | system
	 */
	source: code;
}