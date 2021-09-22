import { DomainResource } from "./DomainResource.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { Element } from "./Element.ts";
import { PublicationStatus, OperationKind, dateTime, code, markdown, uri } from "../Types/FhirTypes.ts";
import { OperationDefinitionOverload } from "./OperationDefinitionOverload.ts";
import { Reference } from "./Reference.ts";
import { ContactDetail } from "./ContactDetail.ts";
import { UsageContext } from "./UsageContext.ts";
import { OperationDefinitionParameter } from "./OperationDefinitionParameter.ts";


/**
 * Definition of an operation or a named query
 */
export interface OperationDefinition extends DomainResource {
	/**
	 * Logical URI to reference this operation definition (globally unique)
	 */
	url?: uri;
	/**
	 * Contains extended information for property 'url'.
	 */
	_url?: Element;
	/**
	 * Business version of the operation definition
	 */
	version?: string;
	/**
	 * Contains extended information for property 'version'.
	 */
	_version?: Element;
	/**
	 * Name for this operation definition (computer friendly)
	 */
	name: string;
	/**
	 * Contains extended information for property 'name'.
	 */
	_name?: Element;
	/**
	 * draft | active | retired | unknown
	 */
	status: PublicationStatus;
	/**
	 * Contains extended information for property 'status'.
	 */
	_status?: Element;
	/**
	 * operation | query
	 */
	kind: OperationKind;
	/**
	 * Contains extended information for property 'kind'.
	 */
	_kind?: Element;
	/**
	 * For testing purposes, not real usage
	 */
	experimental?: boolean;
	/**
	 * Contains extended information for property 'experimental'.
	 */
	_experimental?: Element;
	/**
	 * Date this was last changed
	 */
	date?: dateTime;
	/**
	 * Contains extended information for property 'date'.
	 */
	_date?: Element;
	/**
	 * Name of the publisher (organization or individual)
	 */
	publisher?: string;
	/**
	 * Contains extended information for property 'publisher'.
	 */
	_publisher?: Element;
	/**
	 * Contact details for the publisher
	 */
	contact?: ContactDetail[];
	/**
	 * Natural language description of the operation definition
	 */
	description?: markdown;
	/**
	 * Contains extended information for property 'description'.
	 */
	_description?: Element;
	/**
	 * Context the content is intended to support
	 */
	useContext?: UsageContext[];
	/**
	 * Intended jurisdiction for operation definition (if applicable)
	 */
	jurisdiction?: CodeableConcept[];
	/**
	 * Why this operation definition is defined
	 */
	purpose?: markdown;
	/**
	 * Contains extended information for property 'purpose'.
	 */
	_purpose?: Element;
	/**
	 * Whether content is unchanged by the operation
	 */
	idempotent?: boolean;
	/**
	 * Contains extended information for property 'idempotent'.
	 */
	_idempotent?: Element;
	/**
	 * Name used to invoke the operation
	 */
	code: code;
	/**
	 * Contains extended information for property 'code'.
	 */
	_code?: Element;
	/**
	 * Additional information about use
	 */
	comment?: string;
	/**
	 * Contains extended information for property 'comment'.
	 */
	_comment?: Element;
	/**
	 * Marks this as a profile of the base
	 */
	base?: Reference;
	/**
	 * Types this operation applies to
	 */
	resource?: code[];
	/**
	 * Contains extended information for property 'resource'.
	 */
	_resource?: Element[];
	/**
	 * Invoke at the system level?
	 */
	system: boolean;
	/**
	 * Contains extended information for property 'system'.
	 */
	_system?: Element;
	/**
	 * Invole at the type level?
	 */
	type: boolean;
	/**
	 * Contains extended information for property 'type'.
	 */
	_type?: Element;
	/**
	 * Invoke on an instance?
	 */
	instance: boolean;
	/**
	 * Contains extended information for property 'instance'.
	 */
	_instance?: Element;
	/**
	 * Parameters for the operation/query
	 */
	parameter?: OperationDefinitionParameter[];
	/**
	 * Define overloaded variants for when  generating code
	 */
	overload?: OperationDefinitionOverload[];
}