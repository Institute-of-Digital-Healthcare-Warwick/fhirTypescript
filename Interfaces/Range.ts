import { Element } from "./Element.ts";
import { Quantity } from "./Quantity.ts";




/**
 * Set of values bounded by low and high
 */
export interface Range extends Element {
	/**
	 * Low limit
	 */
	low?: Quantity;


	/**
	 * High limit
	 */
	high?: Quantity;
}