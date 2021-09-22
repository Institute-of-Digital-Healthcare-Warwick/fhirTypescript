import { decimal,positiveInt } from "../Types/FhirTypes.ts";
import { Element } from "./Element.ts";
import { Quantity } from "./Quantity.ts";


/**
 * A series of measurements taken by a device
 */
export interface SampledData extends Element {
	/**
	 * Zero value and units
	 */
	origin: Quantity;
	/**
	 * Number of milliseconds between samples
	 */
	period: decimal;
	/**
	 * Contains extended information for property 'period'.
	 */
	_period?: Element;
	/**
	 * Multiply data by this before adding to origin
	 */
	factor?: decimal;
	/**
	 * Contains extended information for property 'factor'.
	 */
	_factor?: Element;
	/**
	 * Lower limit of detection
	 */
	lowerLimit?: decimal;
	/**
	 * Contains extended information for property 'lowerLimit'.
	 */
	_lowerLimit?: Element;
	/**
	 * Upper limit of detection
	 */
	upperLimit?: decimal;
	/**
	 * Contains extended information for property 'upperLimit'.
	 */
	_upperLimit?: Element;
	/**
	 * Number of sample points at each time point
	 */
	dimensions: positiveInt;
	/**
	 * Contains extended information for property 'dimensions'.
	 */
	_dimensions?: Element;
	/**
	 * Decimal values with spaces, or "E" | "U" | "L"
	 */
	data: string;
	/**
	 * Contains extended information for property 'data'.
	 */
	_data?: Element;
}