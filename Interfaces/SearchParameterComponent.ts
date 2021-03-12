import { BackboneElement } from "./BackboneElement.ts";
import { Element } from "./Element.ts";
import { Reference } from "./Reference.ts";


/**
 * For Composite resources to define the parts
 */
export interface SearchParameterComponent extends BackboneElement {
	/**
	 * Defines how the part works
	 */
	definition: Reference;
	/**
	 * Sub expression relative to main expression
	 */
	expression: string;
	/**
	 * Contains extended information for property 'expression'.
	 */
	_expression?: Element;
}