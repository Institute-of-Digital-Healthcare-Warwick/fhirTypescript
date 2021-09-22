import { IssueSeverity,code } from "../Types/FhirTypes.ts";
import { BackboneElement } from "./BackboneElement.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { Element } from "./Element.ts";


/**
 * A single issue associated with the action
 */
export interface OperationOutcomeIssue extends BackboneElement {
	/**
	 * fatal | error | warning | information
	 */
	severity: IssueSeverity;


	/**
	 * Contains extended information for property 'severity'.
	 */
	_severity?: Element;


	/**
	 * Error or warning code
	 */
	code: code;


	/**
	 * Contains extended information for property 'code'.
	 */
	_code?: Element;


	/**
	 * Additional details about the error
	 */
	details?: CodeableConcept;


	/**
	 * Additional diagnostic information about the issue
	 */
	diagnostics?: string;


	/**
	 * Contains extended information for property 'diagnostics'.
	 */
	_diagnostics?: Element;


	/**
	 * Path of element(s) related to issue
	 */
	location?: string[];


	/**
	 * Contains extended information for property 'location'.
	 */
	_location?: Element[];


	/**
	 * FHIRPath of element(s) related to issue
	 */
	expression?: string[];

	
	/**
	 * Contains extended information for property 'expression'.
	 */
	_expression?: Element[];
}