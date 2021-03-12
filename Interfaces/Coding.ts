import { Element } from "./Element.ts";
import { code, uri } from "./FhirTypes.ts";




/**
 * A reference to a code defined by a terminology system
 */
export interface Coding extends Element {
	/**
	 * Identity of the terminology system
	 */
	system?: uri;


	/**
	 * Contains extended information for property 'system'.
	 */
	_system?: Element;


	/**
	 * Version of the system - if relevant
	 */
	version?: string;


	/**
	 * Contains extended information for property 'version'.
	 */
	_version?: Element;


	/**
	 * Symbol in syntax defined by the system
	 */
	code?: code;


	/**
	 * Contains extended information for property 'code'.
	 */
	_code?: Element;


	/**
	 * Representation defined by the system
	 */
	display?: string;


	/**
	 * Contains extended information for property 'display'.
	 */
	_display?: Element;


	/**
	 * If this coding was chosen directly by the user
	 */
	userSelected?: boolean;


	/**
	 * Contains extended information for property 'userSelected'.
	 */
	_userSelected?: Element;
}
