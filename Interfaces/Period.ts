import { dateTime } from "../Types/FhirTypes.ts";
import { Element } from "./Element.ts";


/**
 * Time range defined by start and end date/time
 */
export interface Period extends Element {
	/**
	 * Starting time with inclusive boundary
	 */
	start?: dateTime;


	/**
	 * Contains extended information for property 'start'.
	 */
	_start?: Element;


	/**
	 * End time with inclusive boundary, if not ongoing
	 */
	end?: dateTime;


	/**
	 * Contains extended information for property 'end'.
	 */
	_end?: Element;
}