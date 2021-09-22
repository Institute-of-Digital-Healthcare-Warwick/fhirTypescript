import { code } from "../Types/FhirTypes.ts";
import { BackboneElement } from "./BackboneElement.ts";


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