import { CodeableConcept } from "./CodeableConcept.ts";
import { Coding } from "./Coding.ts";
import { Element } from "./Element.ts";
import { Quantity } from "./Quantity.ts";
import { Range } from "./Range.ts";


/**
 * Describes the context of use for a conformance or knowledge resource
 */
export interface UsageContext extends Element {
	/**
	 * Type of context being specified
	 */
	code: Coding;


	/**
	 * Value that defines the context
	 */
	valueCodeableConcept?: CodeableConcept;


	/**
	 * Value that defines the context
	 */
	valueQuantity?: Quantity;


	/**
	 * Value that defines the context
	 */
	valueRange?: Range;
}
