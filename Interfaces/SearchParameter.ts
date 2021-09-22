import { CodeableConcept } from "./CodeableConcept.ts";
import { ContactDetail } from "./ContactDetail.ts";
import { DomainResource } from "./DomainResource.ts";
import { Element } from "./Element.ts";
import { PublicationStatus, dateTime, SearchParamType, XPathUsageType, SearchComparator, SearchModifierCode, code, markdown, uri } from "../Types/FhirTypes.ts";
import { SearchParameterComponent } from "./SearchParameterComponent.ts";
import { UsageContext } from "./UsageContext.ts";


/**
 * Search Parameter for a resource
 */
export interface SearchParameter extends DomainResource {
	/**
	 * Logical URI to reference this search parameter (globally unique)
	 */
	url: uri;
	/**
	 * Contains extended information for property 'url'.
	 */
	_url?: Element;
	/**
	 * Business version of the search parameter
	 */
	version?: string;
	/**
	 * Contains extended information for property 'version'.
	 */
	_version?: Element;
	/**
	 * Name for this search parameter (computer friendly)
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
	 * Context the content is intended to support
	 */
	useContext?: UsageContext[];
	/**
	 * Intended jurisdiction for search parameter (if applicable)
	 */
	jurisdiction?: CodeableConcept[];
	/**
	 * Why this search parameter is defined
	 */
	purpose?: markdown;
	/**
	 * Contains extended information for property 'purpose'.
	 */
	_purpose?: Element;
	/**
	 * Code used in URL
	 */
	code: code;
	/**
	 * Contains extended information for property 'code'.
	 */
	_code?: Element;
	/**
	 * The resource type(s) this search parameter applies to
	 */
	base: code[];
	/**
	 * Contains extended information for property 'base'.
	 */
	_base?: Element[];
	/**
	 * number | date | string | token | reference | composite | quantity | uri
	 */
	type: SearchParamType;
	/**
	 * Contains extended information for property 'type'.
	 */
	_type?: Element;
	/**
	 * Original Definition for the search parameter
	 */
	derivedFrom?: uri;
	/**
	 * Contains extended information for property 'derivedFrom'.
	 */
	_derivedFrom?: Element;
	/**
	 * Natural language description of the search parameter
	 */
	description: markdown;
	/**
	 * Contains extended information for property 'description'.
	 */
	_description?: Element;
	/**
	 * FHIRPath expression that extracts the values
	 */
	expression?: string;
	/**
	 * Contains extended information for property 'expression'.
	 */
	_expression?: Element;
	/**
	 * XPath that extracts the values
	 */
	xpath?: string;
	/**
	 * Contains extended information for property 'xpath'.
	 */
	_xpath?: Element;
	/**
	 * normal | phonetic | nearby | distance | other
	 */
	xpathUsage?: XPathUsageType;
	/**
	 * Contains extended information for property 'xpathUsage'.
	 */
	_xpathUsage?: Element;
	/**
	 * Types of resource (if a resource reference)
	 */
	target?: code[];
	/**
	 * Contains extended information for property 'target'.
	 */
	_target?: Element[];
	/**
	 * eq | ne | gt | lt | ge | le | sa | eb | ap
	 */
	comparator?: SearchComparator[];
	/**
	 * Contains extended information for property 'comparator'.
	 */
	_comparator?: Element[];
	/**
	 * missing | exact | contains | not | text | in | not-in | below | above | type
	 */
	modifier?: SearchModifierCode[];
	/**
	 * Contains extended information for property 'modifier'.
	 */
	_modifier?: Element[];
	/**
	 * Chained names supported
	 */
	chain?: string[];
	/**
	 * Contains extended information for property 'chain'.
	 */
	_chain?: Element[];
	/**
	 * For Composite resources to define the parts
	 */
	component?: SearchParameterComponent[];
}