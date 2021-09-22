import { Element } from "./Element.ts";
import { TimingRepeat } from "./TimingRepeat.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { dateTime } from "../Types/FhirTypes.ts";


/**
 * A timing schedule that specifies an event that may occur multiple times
 */
export interface Timing extends Element {
	/**
	 * When the event occurs
	 */
	event?: dateTime[];
	/**
	 * Contains extended information for property 'event'.
	 */
	_event?: Element[];
	/**
	 * When the event is to occur
	 */
	repeat?: TimingRepeat;
	/**
	 * BID | TID | QID | AM | PM | QD | QOD | Q4H | Q6H +
	 */
	code?: CodeableConcept;
}