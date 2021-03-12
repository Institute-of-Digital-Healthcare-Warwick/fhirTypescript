import { DomainResource } from "./DomainResource.ts";
import { OperationOutcomeIssue } from "./OperationOutcomeIssue.ts";


/**
 * Information about the success/failure of an action
 */
export interface OperationOutcome extends DomainResource {
	/**
	 * A single issue associated with the action
	 */
	issue: OperationOutcomeIssue[];
}