import { uri,PublicationStatus,dateTime,markdown,date,code } from "../Types/FhirTypes.ts";
import { CodeableConcept } from "./CodeableConcept.ts";
import { Coding } from "./Coding.ts";
import { ContactDetail } from "./ContactDetail.ts";
import { DomainResource } from "./DomainResource.ts";
import { Element } from "./Element.ts";
import { Identifier } from "./Identifier.ts";
import { Period } from "./Period.ts";
import { QuestionnaireItem } from "./QuestionnaireItem.ts";
import { UsageContext } from "./UsageContext.ts";


/**
 * A structured set of questions
 */
export interface Questionnaire extends DomainResource {
	/**
	 * Logical URI to reference this questionnaire (globally unique)
	 */
	url?: uri;


	/**
	 * Contains extended information for property 'url'.
	 */
	_url?: Element;


	/**
	 * Additional identifier for the questionnaire
	 */
	identifier?: Identifier[];


	/**
	 * Business version of the questionnaire
	 */
	version?: string;


	/**
	 * Contains extended information for property 'version'.
	 */
	_version?: Element;


	/**
	 * Name for this questionnaire (computer friendly)
	 */
	name?: string;


	/**
	 * Contains extended information for property 'name'.
	 */
	_name?: Element;


	/**
	 * Name for this questionnaire (human friendly)
	 */
	title?: string;


	/**
	 * Contains extended information for property 'title'.
	 */
	_title?: Element;


	/**
	 * draft | active | retired | unknown
	 */
	status: PublicationStatus;


	/**
	 * Contains extended information for property 'status'.
	 */
	_status?: Element;


	/**
	 * For testing purposes, not real usage
	 */
	experimental?: boolean;


	/**
	 * Contains extended information for property 'experimental'.
	 */
	_experimental?: Element;


	/**
	 * Date this was last changed
	 */
	date?: dateTime;


	/**
	 * Contains extended information for property 'date'.
	 */
	_date?: Element;


	/**
	 * Name of the publisher (organization or individual)
	 */
	publisher?: string;


	/**
	 * Contains extended information for property 'publisher'.
	 */
	_publisher?: Element;


	/**
	 * Natural language description of the questionnaire
	 */
	description?: markdown;


	/**
	 * Contains extended information for property 'description'.
	 */
	_description?: Element;


	/**
	 * Why this questionnaire is defined
	 */
	purpose?: markdown;


	/**
	 * Contains extended information for property 'purpose'.
	 */
	_purpose?: Element;


	/**
	 * When the questionnaire was approved by publisher
	 */
	approvalDate?: date;


	/**
	 * Contains extended information for property 'approvalDate'.
	 */
	_approvalDate?: Element;


	/**
	 * When the questionnaire was last reviewed
	 */
	lastReviewDate?: date;


	/**
	 * Contains extended information for property 'lastReviewDate'.
	 */
	_lastReviewDate?: Element;


	/**
	 * When the questionnaire is expected to be used
	 */
	effectivePeriod?: Period;


	/**
	 * Context the content is intended to support
	 */
	useContext?: UsageContext[];


	/**
	 * Intended jurisdiction for questionnaire (if applicable)
	 */
	jurisdiction?: CodeableConcept[];


	/**
	 * Contact details for the publisher
	 */
	contact?: ContactDetail[];


	/**
	 * Use and/or publishing restrictions
	 */
	copyright?: markdown;


	/**
	 * Contains extended information for property 'copyright'.
	 */
	_copyright?: Element;


	/**
	 * Concept that represents the overall questionnaire
	 */
	code?: Coding[];


	/**
	 * Resource that can be subject of QuestionnaireResponse
	 */
	subjectType?: code[];


	/**
	 * Contains extended information for property 'subjectType'.
	 */
	_subjectType?: Element[];


	/**
	 * Questions and sections within the Questionnaire
	 */
	item?: QuestionnaireItem[];
}