import { Coding } from "./Coding.ts";
import { Element } from "./Element.ts";
import { instant, uri, code, base64Binary } from "./FhirTypes.ts";
import { Reference } from "./Reference.ts";

/**
 * A digital Signature - XML DigSig, JWT, Graphical image of signature, etc.
 */
export interface Signature extends Element {
	/**
	 * Indication of the reason the entity signed the object(s)
	 */
	type: Coding[];
	/**
	 * When the signature was created
	 */
	when: instant;
	/**
	 * Contains extended information for property 'when'.
	 */
	_when?: Element;
	/**
	 * Who signed
	 */
	whoUri?: uri;
	/**
	 * Contains extended information for property 'whoUri'.
	 */
	_whoUri?: Element;
	/**
	 * Who signed
	 */
	whoReference?: Reference;
	/**
	 * The party represented
	 */
	onBehalfOfUri?: uri;
	/**
	 * Contains extended information for property 'onBehalfOfUri'.
	 */
	_onBehalfOfUri?: Element;
	/**
	 * The party represented
	 */
	onBehalfOfReference?: Reference;
	/**
	 * The technical format of the signature
	 */
	contentType?: code;
	/**
	 * Contains extended information for property 'contentType'.
	 */
	_contentType?: Element;
	/**
	 * The actual signature content (XML DigSig. JWT, picture, etc.)
	 */
	blob?: base64Binary;
	/**
	 * Contains extended information for property 'blob'.
	 */
	_blob?: Element;
}