import { code,base64Binary,uri,unsignedInt,dateTime } from "../Types/FhirTypes.ts";
import { Element } from "./Element.ts";


/**
 * Content in a format defined elsewhere
 */
export interface Attachment extends Element {
	/**
	 * Mime type of the content, with charset etc.
	 */
	contentType?: code;


	/**
	 * Contains extended information for property 'contentType'.
	 */
	_contentType?: Element;


	/**
	 * Human language of the content (BCP-47)
	 */
	language?: code;


	/**
	 * Contains extended information for property 'language'.
	 */
	_language?: Element;


	/**
	 * Data inline, base64ed
	 */
	data?: base64Binary;


	/**
	 * Contains extended information for property 'data'.
	 */
	_data?: Element;


	/**
	 * Uri where the data can be found
	 */
	url?: uri;


	/**
	 * Contains extended information for property 'url'.
	 */
	_url?: Element;


	/**
	 * Number of bytes of content (if url provided)
	 */
	size?: unsignedInt;


	/**
	 * Contains extended information for property 'size'.
	 */
	_size?: Element;


	/**
	 * Hash of the data (sha-1, base64ed)
	 */
	hash?: base64Binary;


	/**
	 * Contains extended information for property 'hash'.
	 */
	_hash?: Element;


	/**
	 * Label to display in place of the data
	 */
	title?: string;


	/**
	 * Contains extended information for property 'title'.
	 */
	_title?: Element;


	/**
	 * Date attachment was first created
	 */
	creation?: dateTime;


	/**
	 * Contains extended information for property 'creation'.
	 */
	_creation?: Element;
}