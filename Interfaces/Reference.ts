import { Element } from "./Element.ts";
import { Identifier } from "./Identifier.ts";




/**
 * A reference from one resource to another
 */
export interface Reference extends Element {
	/**
	 * Literal reference, Relative, internal or absolute URL
	 */
	reference?: string;


	/**
	 * Contains extended information for property 'reference'.
	 */
	_reference?: Element;


	/**
	 * Logical reference, when literal reference is not known
	 */
	identifier?: Identifier;


	/**
	 * Text alternative for the resource
	 */
	display?: string;


	/**
	 * Contains extended information for property 'display'.
	 */
	_display?: Element;
}