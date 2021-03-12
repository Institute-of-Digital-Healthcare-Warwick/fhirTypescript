import { Address } from "./Address.ts";
import { Age } from "./Age.ts";
import { Annotation } from "./Annotation.ts";
import { Attachment } from "./Attachment.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { Coding } from "./Coding.ts";
import { ContactPoint } from "./ContactPoint.ts";
import { Count } from "./Count.ts";
import { Distance } from "./Distance.ts";
import { Duration } from "./Duration.ts";
import { Element } from "./Element.ts";
import { base64Binary, code, date, dateTime, decimal, id, instant, integer, markdown, oid, positiveInt, time, unsignedInt, uri } from "./FhirTypes.ts";
import { HumanName } from "./HumanName.ts";
import { Identifier } from "./Identifier.ts";
import { Meta } from "./Meta.ts";
import { Money } from "./Money.ts";
import { Period } from "./Period.ts";
import { Quantity } from "./Quantity.ts";
import { Range } from "./Range.ts";
import { Ratio } from "./Ratio.ts";
import { Reference } from "./Reference.ts";
import { SampledData } from "./SampledData.ts";
import { Signature } from "./Signature.ts";
import { Timing } from "./Timing.ts";


/**
 * Optional Extensions Element
 */
export interface Extension extends Element {
	/**
	 * identifies the meaning of the extension
	 */
	url: uri;


	/**
	 * Contains extended information for property 'url'.
	 */
	_url?: Element;


	/**
	 * Value of extension
	 */
	valueBase64Binary?: base64Binary;


	/**
	 * Contains extended information for property 'valueBase64Binary'.
	 */
	_valueBase64Binary?: Element;


	/**
	 * Value of extension
	 */
	valueBoolean?: boolean;


	/**
	 * Contains extended information for property 'valueBoolean'.
	 */
	_valueBoolean?: Element;


	/**
	 * Value of extension
	 */
	valueCode?: code;


	/**
	 * Contains extended information for property 'valueCode'.
	 */
	_valueCode?: Element;


	/**
	 * Value of extension
	 */
	valueDate?: date;


	/**
	 * Contains extended information for property 'valueDate'.
	 */
	_valueDate?: Element;


	/**
	 * Value of extension
	 */
	valueDateTime?: dateTime;


	/**
	 * Contains extended information for property 'valueDateTime'.
	 */
	_valueDateTime?: Element;


	/**
	 * Value of extension
	 */
	valueDecimal?: decimal;


	/**
	 * Contains extended information for property 'valueDecimal'.
	 */
	_valueDecimal?: Element;


	/**
	 * Value of extension
	 */
	valueId?: id;


	/**
	 * Contains extended information for property 'valueId'.
	 */
	_valueId?: Element;


	/**
	 * Value of extension
	 */
	valueInstant?: instant;


	/**
	 * Contains extended information for property 'valueInstant'.
	 */
	_valueInstant?: Element;


	/**
	 * Value of extension
	 */
	valueInteger?: integer;


	/**
	 * Contains extended information for property 'valueInteger'.
	 */
	_valueInteger?: Element;


	/**
	 * Value of extension
	 */
	valueMarkdown?: markdown;


	/**
	 * Contains extended information for property 'valueMarkdown'.
	 */
	_valueMarkdown?: Element;


	/**
	 * Value of extension
	 */
	valueOid?: oid;


	/**
	 * Contains extended information for property 'valueOid'.
	 */
	_valueOid?: Element;


	/**
	 * Value of extension
	 */
	valuePositiveInt?: positiveInt;


	/**
	 * Contains extended information for property 'valuePositiveInt'.
	 */
	_valuePositiveInt?: Element;


	/**
	 * Value of extension
	 */
	valueString?: string;


	/**
	 * Contains extended information for property 'valueString'.
	 */
	_valueString?: Element;


	/**
	 * Value of extension
	 */
	valueTime?: time;


	/**
	 * Contains extended information for property 'valueTime'.
	 */
	_valueTime?: Element;


	/**
	 * Value of extension
	 */
	valueUnsignedInt?: unsignedInt;


	/**
	 * Contains extended information for property 'valueUnsignedInt'.
	 */
	_valueUnsignedInt?: Element;


	/**
	 * Value of extension
	 */
	valueUri?: uri;


	/**
	 * Contains extended information for property 'valueUri'.
	 */
	_valueUri?: Element;


	/**
	 * Value of extension
	 */
	valueAddress?: Address;


	/**
	 * Value of extension
	 */
	valueAge?: Age;


	/**
	 * Value of extension
	 */
	valueAnnotation?: Annotation;


	/**
	 * Value of extension
	 */
	valueAttachment?: Attachment;


	/**
	 * Value of extension
	 */
	valueCodeableConcept?: CodeableConcept;


	/**
	 * Value of extension
	 */
	valueCoding?: Coding;


	/**
	 * Value of extension
	 */
	valueContactPoint?: ContactPoint;


	/**
	 * Value of extension
	 */
	valueCount?: Count;


	/**
	 * Value of extension
	 */
	valueDistance?: Distance;


	/**
	 * Value of extension
	 */
	valueDuration?: Duration;


	/**
	 * Value of extension
	 */
	valueHumanName?: HumanName;


	/**
	 * Value of extension
	 */
	valueIdentifier?: Identifier;


	/**
	 * Value of extension
	 */
	valueMoney?: Money;


	/**
	 * Value of extension
	 */
	valuePeriod?: Period;


	/**
	 * Value of extension
	 */
	valueQuantity?: Quantity;


	/**
	 * Value of extension
	 */
	valueRange?: Range;


	/**
	 * Value of extension
	 */
	valueRatio?: Ratio;


	/**
	 * Value of extension
	 */
	valueReference?: Reference;


	/**
	 * Value of extension
	 */
	valueSampledData?: SampledData;


	/**
	 * Value of extension
	 */
	valueSignature?: Signature;


	/**
	 * Value of extension
	 */
	valueTiming?: Timing;


	/**
	 * Value of extension
	 */
	valueMeta?: Meta;
}
