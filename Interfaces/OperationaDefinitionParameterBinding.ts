import { BackboneElement } from "./BackboneElement.ts";
import { Element } from "./Element.ts";
import { BindingStrength, uri } from "./FhirTypes.ts";
import { Reference } from "./Reference.ts";


/**
 * ValueSet details if this is coded
 */
export interface OperationDefinitionParameterBinding extends BackboneElement {
	/**
	 * required | extensible | preferred | example
	 */
	strength: BindingStrength;
	/**
	 * Contains extended information for property 'strength'.
	 */
	_strength?: Element;
	/**
	 * Source of value set
	 */
	valueSetUri?: uri;
	/**
	 * Contains extended information for property 'valueSetUri'.
	 */
	_valueSetUri?: Element;
	/**
	 * Source of value set
	 */
	valueSetReference?: Reference;
}