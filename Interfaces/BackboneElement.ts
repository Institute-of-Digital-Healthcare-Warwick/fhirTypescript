import { Element } from "./Element.ts";
import { Extension } from "./Extension.ts";


/**
 * Base for elements defined inside a resource
 */
export interface BackboneElement extends Element {
	/**
	 * Extensions that cannot be ignored
	 */
	modifierExtension?: Extension[];
}