import { Element } from "./Element.ts";
import { code, decimal, QuantityComparator, uri } from "./FhirTypes.ts";


/**
 * A measured or measurable amount
 */
export interface Quantity extends Element {
	/**
	 * Numerical value (with implicit precision)
	 */
	value?: decimal;


	/**
	 * Contains extended information for property 'value'.
	 */
	_value?: Element;


	/**
	 * < | <= | >= | > - how to understand the value
	 */
	comparator?: QuantityComparator;


	/**
	 * Contains extended information for property 'comparator'.
	 */
	_comparator?: Element;


	/**
	 * Unit representation
	 */
	unit?: string;


	/**
	 * Contains extended information for property 'unit'.
	 */
	_unit?: Element;


	/**
	 * System that defines coded unit form
	 */
	system?: uri;


	/**
	 * Contains extended information for property 'system'.
	 */
	_system?: Element;


	/**
	 * Coded form of the unit
	 */
	code?: code;


	/**
	 * Contains extended information for property 'code'.
	 */
	_code?: Element;
}