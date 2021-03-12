import { BackboneElement } from "./BackboneElement.ts";
import { Element } from "./Element.ts";
import { code, OperationParameterUse, integer, SearchParamType } from "./FhirTypes.ts";
import { OperationDefinitionParameterBinding } from "./OperationaDefinitionParameterBinding.ts";
import { Reference } from "./Reference.ts";


/**
 * Parameters for the operation/query
 */
export interface OperationDefinitionParameter extends BackboneElement {
	/**
	 * Name in Parameters.parameter.name or in URL
	 */
	name: code;
	/**
	 * Contains extended information for property 'name'.
	 */
	_name?: Element;
	/**
	 * in | out
	 */
	use: OperationParameterUse;
	/**
	 * Contains extended information for property 'use'.
	 */
	_use?: Element;
	/**
	 * Minimum Cardinality
	 */
	min: integer;
	/**
	 * Contains extended information for property 'min'.
	 */
	_min?: Element;
	/**
	 * Maximum Cardinality (a number or *)
	 */
	max: string;
	/**
	 * Contains extended information for property 'max'.
	 */
	_max?: Element;
	/**
	 * Description of meaning/use
	 */
	documentation?: string;
	/**
	 * Contains extended information for property 'documentation'.
	 */
	_documentation?: Element;
	/**
	 * What type this parameter has
	 */
	type?: code;
	/**
	 * Contains extended information for property 'type'.
	 */
	_type?: Element;
	/**
	 * number | date | string | token | reference | composite | quantity | uri
	 */
	searchType?: SearchParamType;
	/**
	 * Contains extended information for property 'searchType'.
	 */
	_searchType?: Element;
	/**
	 * Profile on the type
	 */
	profile?: Reference;
	/**
	 * ValueSet details if this is coded
	 */
	binding?: OperationDefinitionParameterBinding;
	/**
	 * Parts of a nested Parameter
	 */
	part?: OperationDefinitionParameter[];
}