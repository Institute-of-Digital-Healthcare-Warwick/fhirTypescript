import { Element } from "./Element.ts";
import { Quantity } from "./Quantity.ts";


/**
 * A ratio of two Quantity values - a numerator and a denominator
 */
export interface Ratio extends Element {
	/**
	 * Numerator value
	 */
	numerator?: Quantity;
	/**
	 * Denominator value
	 */
	denominator?: Quantity;
}