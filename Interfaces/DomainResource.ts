import { Extension } from "./Extension.ts";
import { Narrative } from "./Narrative.ts";
import { Resource } from "./Resource.ts";
import { ResourceBase } from "./ResourceBase.ts";


/**
 * A resource with narrative, extensions, and contained resources
 */
export interface DomainResource extends ResourceBase {
	/**
	 * Text summary of the resource, for human interpretation
	 */
	text?: Narrative;


	/**
	 * Contained, inline Resources
	 */
	contained?: Resource[];


	/**
	 * Additional Content defined by implementations
	 */
	extension?: Extension[];


	/**
	 * Extensions that cannot be ignored
	 */
	modifierExtension?: Extension[];
}