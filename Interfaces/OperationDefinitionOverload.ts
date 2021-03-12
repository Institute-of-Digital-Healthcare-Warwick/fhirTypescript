import { BackboneElement } from "./BackboneElement.ts";
import { Element } from "./Element.ts";


/**
 * Define overloaded variants for when  generating code
 */
export interface OperationDefinitionOverload extends BackboneElement {
	/**
	 * Name of parameter to include in overload
	 */
	parameterName?: string[];
	/**
	 * Contains extended information for property 'parameterName'.
	 */
	_parameterName?: Element[];
	/**
	 * Comments to go on overload
	 */
	comment?: string;
	/**
	 * Contains extended information for property 'comment'.
	 */
	_comment?: Element;
}