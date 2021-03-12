import { BackboneElement } from "./BackboneElement.ts";
import { Element } from "./Element.ts";
import { decimal } from "./FhirTypes.ts";




/**
 * The absolute geographic location
 */
export interface LocationPosition extends BackboneElement {
	/**
	 * Longitude with WGS84 datum
	 */
	longitude: decimal;


	/**
	 * Contains extended information for property 'longitude'.
	 */
	_longitude?: Element;


	/**
	 * Latitude with WGS84 datum
	 */
	latitude: decimal;


	/**
	 * Contains extended information for property 'latitude'.
	 */
	_latitude?: Element;


	/**
	 * Altitude with WGS84 datum
	 */
	altitude?: decimal;


	/**
	 * Contains extended information for property 'altitude'.
	 */
	_altitude?: Element;
}