import { Duration } from "./Duration.ts";
import { Element } from "./Element.ts";
import { code, DaysOfWeek, decimal, integer, time, UnitsOfTime, unsignedInt } from "../Types/FhirTypes.ts";
import { Period } from "./Period.ts";
import { Range } from "./Range.ts";


/**
 * When the event is to occur
 */
export interface TimingRepeat extends Element {
	/**
	 * Length/Range of lengths, or (Start and/or end) limits
	 */
	boundsDuration?: Duration;
	/**
	 * Length/Range of lengths, or (Start and/or end) limits
	 */
	boundsRange?: Range;
	/**
	 * Length/Range of lengths, or (Start and/or end) limits
	 */
	boundsPeriod?: Period;
	/**
	 * Number of times to repeat
	 */
	count?: integer;
	/**
	 * Contains extended information for property 'count'.
	 */
	_count?: Element;
	/**
	 * Maximum number of times to repeat
	 */
	countMax?: integer;
	/**
	 * Contains extended information for property 'countMax'.
	 */
	_countMax?: Element;
	/**
	 * How long when it happens
	 */
	duration?: decimal;
	/**
	 * Contains extended information for property 'duration'.
	 */
	_duration?: Element;
	/**
	 * How long when it happens (Max)
	 */
	durationMax?: decimal;
	/**
	 * Contains extended information for property 'durationMax'.
	 */
	_durationMax?: Element;
	/**
	 * s | min | h | d | wk | mo | a - unit of time (UCUM)
	 */
	durationUnit?: UnitsOfTime;
	/**
	 * Contains extended information for property 'durationUnit'.
	 */
	_durationUnit?: Element;
	/**
	 * Event occurs frequency times per period
	 */
	frequency?: integer;
	/**
	 * Contains extended information for property 'frequency'.
	 */
	_frequency?: Element;
	/**
	 * Event occurs up to frequencyMax times per period
	 */
	frequencyMax?: integer;
	/**
	 * Contains extended information for property 'frequencyMax'.
	 */
	_frequencyMax?: Element;
	/**
	 * Event occurs frequency times per period
	 */
	period?: decimal;
	/**
	 * Contains extended information for property 'period'.
	 */
	_period?: Element;
	/**
	 * Upper limit of period (3-4 hours)
	 */
	periodMax?: decimal;
	/**
	 * Contains extended information for property 'periodMax'.
	 */
	_periodMax?: Element;
	/**
	 * s | min | h | d | wk | mo | a - unit of time (UCUM)
	 */
	periodUnit?: UnitsOfTime;
	/**
	 * Contains extended information for property 'periodUnit'.
	 */
	_periodUnit?: Element;
	/**
	 * mon | tue | wed | thu | fri | sat | sun
	 */
	dayOfWeek?: DaysOfWeek[];
	/**
	 * Contains extended information for property 'dayOfWeek'.
	 */
	_dayOfWeek?: Element[];
	/**
	 * Time of day for action
	 */
	timeOfDay?: time[];
	/**
	 * Contains extended information for property 'timeOfDay'.
	 */
	_timeOfDay?: Element[];
	/**
	 * Regular life events the event is tied to
	 */
	when?: code[];
	/**
	 * Contains extended information for property 'when'.
	 */
	_when?: Element[];
	/**
	 * Minutes from event (before or after)
	 */
	offset?: unsignedInt;
	/**
	 * Contains extended information for property 'offset'.
	 */
	_offset?: Element;
}