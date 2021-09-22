import { Coding } from "../Interfaces/Coding.ts";


/**
 * Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.
 */
export type id = string;
/**
* String of characters used to identify a name or a resource
*/
export type uri = string;
/**
* A stream of bytes
*/
export type base64Binary = string;
/**
* A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
*/
export type code = string;
/**
* A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.
*/
export type date = string;
/**
* A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.				 Dates SHALL be valid dates.
*/
export type dateTime = string;
/**
* A rational number with implicit precision
*/
export type decimal = number;
/**
* An instant in time - known at least to the second
*/
export type instant = string;
/**
* A whole number
*/
export type integer = number;
/**
* A string that may contain markdown syntax for optional processing by a mark down presentation engine
*/
export type markdown = string;
/**
* An OID represented as a URI
*/
export type oid = string;
/**
* An integer with a value that is positive (e.g. >0)
*/
export type positiveInt = number;
/**
* A time during the day, with no date specified
*/
export type time = string;
/**
* An integer with a value that is not negative (e.g. >= 0)
*/
export type unsignedInt = number;
/**
* This value set includes Status codes
*/
export type FinancialResourceStatusCode =
  | "active"
  | "cancelled"
  | "draft"
  | "entered-in-error";
/**
* The use of an address
*/
export type AddressUse = "home" | "work" | "temp" | "old";
/**
* The type of an address (physical / postal)
*/
export type AddressType = "postal" | "physical" | "both";
/**
* How the Quantity should be understood and represented
*/
export type QuantityComparator = "<" | "<=" | ">=" | ">";
/**
* Identifies the purpose for this identifier, if known
*/
export type IdentifierUse = "usual" | "official" | "temp" | "secondary";
/**
* Telecommunications form for contact point
*/
export type ContactPointSystem =
  | "phone"
  | "fax"
  | "email"
  | "pager"
  | "url"
  | "sms"
  | "other";
/**
* Use of contact point
*/
export type ContactPointUse = "home" | "work" | "temp" | "old" | "mobile";
/**
* The use of a human name
*/
export type NameUse =
  | "usual"
  | "official"
  | "temp"
  | "nickname"
  | "anonymous"
  | "old"
  | "maiden";
/**
* A unit of time (units from UCUM)
*/
export type UnitsOfTime = "s" | "min" | "h" | "d" | "wk" | "mo" | "a";
/**
* The status of a resource narrative
*/
export type NarrativeStatus =
  | "generated"
  | "extensions"
  | "additional"
  | "empty";
/**
* Indicates whether the account is available to be used
*/
export type AccountStatus = "active" | "inactive" | "entered-in-error";
/**
* The type of contributor
*/
export type ContributorType = "author" | "editor" | "reviewer" | "endorser";
/**
* The type of relationship to the related artifact
*/
export type RelatedArtifactType =
  | "documentation"
  | "justification"
  | "citation"
  | "predecessor"
  | "successor"
  | "derived-from"
  | "depends-on"
  | "composed-of";
/**
* The type of participant for the action
*/
export type ActionParticipantType =
  | "patient"
  | "practitioner"
  | "related-person";
/**
* The lifecycle status of a Value Set or Concept Map
*/
export type PublicationStatus = "draft" | "active" | "retired" | "unknown";
/**
* @see http://www.hl7.org/fhir/STU3/codesystem-adverse-event-causality.html
*/
export type AdverseEventCausality = "causality1" | "causality2";
/**
* Overall categorization of the event, e.g. real or potential
*/
export type AdverseEventCategory = "AE" | "PAE";
/**
* Clinical assessment of the severity of a reaction event as a whole, potentially considering multiple different manifestations
*/
export type AllergyIntoleranceSeverity = "mild" | "moderate" | "severe";
/**
* The clinical status of the allergy or intolerance
*/
export type AllergyIntoleranceClinicalStatus =
  | "active"
  | "inactive"
  | "resolved";
/**
* Assertion about certainty associated with a propensity, or potential risk, of a reaction to the identified substance
*/
export type AllergyIntoleranceVerificationStatus =
  | "unconfirmed"
  | "confirmed"
  | "refuted"
  | "entered-in-error";
/**
* Identification of the underlying physiological mechanism for a Reaction Risk
*/
export type AllergyIntoleranceType = "allergy" | "intolerance";
/**
* Category of an identified substance
*/
export type AllergyIntoleranceCategory =
  | "food"
  | "medication"
  | "environment"
  | "biologic";
/**
* Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
*/
export type AllergyIntoleranceCriticality = "low" | "high" | "unable-to-assess";
/**
* Is the Participant required to attend the appointment
*/
export type ParticipantRequired = "required" | "optional" | "information-only";
/**
* The Participation status of an appointment
*/
export type ParticipationStatus =
  | "accepted"
  | "declined"
  | "tentative"
  | "needs-action";
/**
* The free/busy status of an appointment
*/
export type AppointmentStatus =
  | "proposed"
  | "pending"
  | "booked"
  | "arrived"
  | "fulfilled"
  | "cancelled"
  | "noshow"
  | "entered-in-error";
/**
* Why an entry is in the result set - whether it's included as a match or because of an _include requirement
*/
export type SearchEntryMode = "match" | "include" | "outcome";
/**
* HTTP verbs (in the HTTP command line)
*/
export type HTTPVerb = "GET" | "POST" | "PUT" | "DELETE";
/**
* Indicates the purpose of a bundle - how it was intended to be used.
*/
export type BundleType =
  | "document"
  | "message"
  | "transaction"
  | "transaction-response"
  | "batch"
  | "batch-response"
  | "history"
  | "searchset"
  | "collection";
/**
* The mode of a RESTful capability statement
*/
export type RestfulCapabilityMode = "client" | "server";
/**
* How the system supports versioning for a resource
*/
export type ResourceVersionPolicy =
  | "no-version"
  | "versioned"
  | "versioned-update";
/**
* A code that indicates how the server supports conditional read
*/
export type ConditionalReadStatus =
  | "not-supported"
  | "modified-since"
  | "not-match"
  | "full-support";
/**
* A code that indicates how the server supports conditional delete
*/
export type ConditionalDeleteStatus = "not-supported" | "single" | "multiple";
/**
* A set of flags that defines how references are supported
*/
export type ReferenceHandlingPolicy =
  | "literal"
  | "logical"
  | "resolves"
  | "enforced"
  | "local";
/**
* Operations supported by REST at the type or instance level
*/
export type TypeRestfulInteraction =
  | "read"
  | "vread"
  | "update"
  | "patch"
  | "delete"
  | "history-instance"
  | "history-type"
  | "create"
  | "search-type";
/**
* Data types allowed to be used for search parameters
*/
export type SearchParamType =
  | "number"
  | "date"
  | "string"
  | "token"
  | "reference"
  | "composite"
  | "quantity"
  | "uri";
/**
* Operations supported by REST at the system level
*/
export type SystemRestfulInteraction =
  | "read"
  | "vread"
  | "update"
  | "patch"
  | "delete"
  | "history"
  | "history-instance"
  | "history-type"
  | "history-system"
  | "create"
  | "search"
  | "search-type"
  | "search-system"
  | "capabilities"
  | "transaction"
  | "batch"
  | "operation";
/**
* The mode of a message capability statement
*/
export type EventCapabilityMode = "sender" | "receiver";
/**
* One of the message events defined as part of FHIR
*/
export type MessageEvent = "Consequence" | "Currency" | "Notification";
/**
* Whether the application produces or consumes documents
*/
export type DocumentMode = "producer" | "consumer";
/**
* How a capability statement is intended to be used
*/
export type CapabilityStatementKind =
  | "instance"
  | "capability"
  | "requirements";
/**
* A code that indicates whether an application accepts unknown elements or extensions when reading resources
*/
export type UnknownContentCode = "no" | "extensions" | "elements" | "both";
/**
* Indicates where the activity is at in its overall life cycle
*/
export type CarePlanActivityStatus =
  | "not-started"
  | "scheduled"
  | "in-progress"
  | "on-hold"
  | "completed"
  | "cancelled"
  | "unknown";
/**
* Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record
*/
export type CarePlanStatus =
  | "draft"
  | "active"
  | "suspended"
  | "completed"
  | "entered-in-error"
  | "cancelled"
  | "unknown";
/**
* Codes indicating the degree of authority/intentionality associated with a care plan
*/
export type CarePlanIntent = "proposal" | "plan" | "order" | "option";
/**
* Indicates the status of the care team
*/
export type CareTeamStatus =
  | "proposed"
  | "active"
  | "suspended"
  | "inactive"
  | "entered-in-error";
/**
* Codes identifying the stage lifecycle stage of a ChargeItem
*/
export type ChargeItemStatus =
  | "planned"
  | "billable"
  | "not-billable"
  | "aborted"
  | "billed"
  | "entered-in-error"
  | "unknown";
/**
* Complete, proposed, exploratory, other
*/
export type Use = "complete" | "proposed" | "exploratory" | "other";
/**
* The workflow state of a clinical impression
*/
export type ClinicalImpressionStatus =
  | "draft"
  | "completed"
  | "entered-in-error";
/**
* The type of a property value
*/
export type PropertyType =
  | "code"
  | Coding
  | "string"
  | "integer"
  | "boolean"
  | "dateTime";
/**
* The meaning of the hierarchy of concepts in a code system
*/
export type CodeSystemHierarchyMeaning =
  | "grouped-by"
  | "is-a"
  | "part-of"
  | "classified-with";
/**
* How much of the content of the code system - the concepts and codes it defines - are represented in a code system resource
*/
export type CodeSystemContentMode =
  | "not-present"
  | "example"
  | "fragment"
  | "complete";
/**
* Codes identifying the stage lifecycle stage of a event
*/
export type EventStatus =
  | "preparation"
  | "in-progress"
  | "suspended"
  | "aborted"
  | "completed"
  | "entered-in-error"
  | "unknown";
/**
* Codes identifying the stage lifecycle stage of a request
*/
export type RequestStatus =
  | "draft"
  | "active"
  | "suspended"
  | "cancelled"
  | "completed"
  | "entered-in-error"
  | "unknown";
/**
* The way in which a person authenticated a composition
*/
export type CompositionAttestationMode =
  | "personal"
  | "professional"
  | "legal"
  | "official";
/**
* The type of relationship between documents
*/
export type DocumentRelationshipType =
  | "replaces"
  | "transforms"
  | "signs"
  | "appends";
/**
* The processing mode that applies to this list
*/
export type ListMode = "working" | "snapshot" | "changes";
/**
* The workflow/clinical status of the composition
*/
export type CompositionStatus =
  | "preliminary"
  | "final"
  | "amended"
  | "entered-in-error";
/**
* The degree of equivalence between concepts
*/
export type ConceptMapEquivalence =
  | "relatedto"
  | "equivalent"
  | "equal"
  | "wider"
  | "subsumes"
  | "narrower"
  | "specializes"
  | "inexact"
  | "unmatched"
  | "disjoint";
/**
* Defines which action to take if there is no match in the group
*/
export type ConceptMapGroupUnmappedMode = "provided" | "fixed" | "other-map";
/**
* Preferred value set for Condition Clinical Status
*/
export type ConditionClinicalStatusCodes =
  | "active"
  | "recurrence"
  | "inactive"
  | "remission"
  | "resolved";
/**
* The verification status to support or decline the clinical status of the condition or diagnosis
*/
export type ConditionVerificationStatus =
  | "provisional"
  | "differential"
  | "confirmed"
  | "refuted"
  | "entered-in-error"
  | "unknown";
/**
* How a resource reference is interpreted when testing consent restrictions
*/
export type ConsentDataMeaning =
  | "instance"
  | "related"
  | "dependents"
  | "authoredby";
/**
* How an exception statement is applied, such as adding additional consent or removing consent
*/
export type ConsentExceptType = "deny" | "permit";
/**
* Indicates the state of the consent
*/
export type ConsentState =
  | "draft"
  | "proposed"
  | "active"
  | "rejected"
  | "inactive"
  | "entered-in-error";
/**
* This value set contract specific codes for status
*/
export type ContractResourceStatusCodes =
  | "amended"
  | "appended"
  | "cancelled"
  | "disputed"
  | "entered-in-error"
  | "executable"
  | "executed"
  | "negotiable"
  | "offered"
  | "policy"
  | "rejected"
  | "renewed"
  | "revoked"
  | "resolved"
  | "terminated";
/**
* How slices are interpreted when evaluating an instance
*/
export type SlicingRules = "closed" | "open" | "openAtEnd";
/**
* How an element value is interpreted when discrimination is evaluated
*/
export type DiscriminatorType =
  | "value"
  | "exists"
  | "pattern"
  | "type"
  | "profile";
/**
* How resource references can be aggregated
*/
export type AggregationMode = "contained" | "referenced" | "bundled";
/**
* Whether a reference needs to be version specific or version independent, or whether either can be used
*/
export type ReferenceVersionRules = "either" | "independent" | "specific";
/**
* SHALL applications comply with this constraint?
*/
export type ConstraintSeverity = "error" | "warning";
/**
* Indication of the degree of conformance expectations associated with a binding
*/
export type BindingStrength =
  | "required"
  | "extensible"
  | "preferred"
  | "example";
/**
* How a property is represented when serialized
*/
export type PropertyRepresentation =
  | "xmlAttr"
  | "xmlText"
  | "typeAttr"
  | "cdaText"
  | "xhtml";
/**
* Indicates the degree of precision of the data element definition
*/
export type DataElementStringency =
  | "comparable"
  | "fully-specified"
  | "equivalent"
  | "convertable"
  | "scaleable"
  | "flexible";
/**
* Codes providing the status of an observation
*/
export type ObservationStatus =
  | "registered"
  | "preliminary"
  | "final"
  | "amended"
  | "corrected"
  | "cancelled"
  | "entered-in-error"
  | "unknown";
/**
* Indicates the potential degree of impact of the identified issue on the patient
*/
export type DetectedIssueSeverity = "high" | "moderate" | "low";
/**
* Codes to identify how UDI data was entered
*/
export type UDIEntryType =
  | "barcode"
  | "rfid"
  | "manual"
  | "card"
  | "self-reported"
  | "unknown";
/**
* The availability status of the device
*/
export type FHIRDeviceStatus =
  | "active"
  | "inactive"
  | "entered-in-error"
  | "unknown";
/**
* Different measurement principle supported by the device
*/
export type MeasmntPrinciple =
  | "other"
  | "chemical"
  | "electrical"
  | "impedance"
  | "nuclear"
  | "optical"
  | "thermal"
  | "biological"
  | "mechanical"
  | "acoustical"
  | "manual";
/**
* Describes the type of a metric calibration
*/
export type DeviceMetricCalibrationType =
  | "unspecified"
  | "offset"
  | "gain"
  | "two-point";
/**
* Describes the state of a metric calibration
*/
export type DeviceMetricCalibrationState =
  | "not-calibrated"
  | "calibration-required"
  | "calibrated"
  | "unspecified";
/**
* Describes the operational status of the DeviceMetric
*/
export type DeviceMetricOperationalStatus =
  | "on"
  | "off"
  | "standby"
  | "entered-in-error";
/**
* Describes the typical color of representation
*/
export type DeviceMetricColor =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white";
/**
* Describes the category of the metric
*/
export type DeviceMetricCategory =
  | "measurement"
  | "setting"
  | "calculation"
  | "unspecified";
/**
* A coded concept indicating the current status of a the Device Usage
*/
export type DeviceUseStatementStatus =
  | "active"
  | "completed"
  | "entered-in-error"
  | "intended"
  | "stopped"
  | "on-hold";
/**
* The status of the diagnostic report as a whole
*/
export type DiagnosticReportStatus =
  | "registered"
  | "partial"
  | "preliminary"
  | "final"
  | "amended"
  | "corrected"
  | "appended"
  | "cancelled"
  | "entered-in-error"
  | "unknown";
/**
* The status of the document reference
*/
export type DocumentReferenceStatus =
  | "current"
  | "superseded"
  | "entered-in-error";
/**
* Current state of the encounter
*/
export type EncounterStatus =
  | "planned"
  | "arrived"
  | "triaged"
  | "in-progress"
  | "onleave"
  | "finished"
  | "cancelled"
  | "entered-in-error"
  | "unknown";
/**
* The status of the location
*/
export type EncounterLocationStatus =
  | "planned"
  | "active"
  | "reserved"
  | "completed";
/**
* The status of the endpoint
*/
export type EndpointStatus =
  | "active"
  | "suspended"
  | "error"
  | "off"
  | "entered-in-error"
  | "test";
/**
* The status of the episode of care
*/
export type EpisodeOfCareStatus =
  | "planned"
  | "waitlist"
  | "active"
  | "onhold"
  | "finished"
  | "cancelled"
  | "entered-in-error";
/**
* How to manage the intersection between a fixed version in a value set, and a fixed version of the system in the expansion profile
*/
export type SystemVersionProcessingMode = "default" | "check" | "override";
/**
* A code specifying the state of the resource instance
*/
export type ExplanationOfBenefitStatus =
  | "active"
  | "cancelled"
  | "draft"
  | "entered-in-error";
/**
* A code that identifies the status of the family history record
*/
export type FamilyHistoryStatus =
  | "partial"
  | "completed"
  | "entered-in-error"
  | "health-unknown";
/**
* The gender of a person used for administrative purposes
*/
export type AdministrativeGender = "male" | "female" | "other" | "unknown";
/**
* Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or entered in error
*/
export type FlagStatus = "active" | "inactive" | "entered-in-error";
/**
* Indicates whether the goal has been met and is still being targeted
*/
export type GoalStatus =
  | "proposed"
  | "accepted"
  | "planned"
  | "in-progress"
  | "on-target"
  | "ahead-of-target"
  | "behind-target"
  | "sustaining"
  | "achieved"
  | "on-hold"
  | "cancelled"
  | "entered-in-error"
  | "rejected";
/**
* How a compartment must be linked
*/
export type GraphCompartmentRule =
  | "identical"
  | "matching"
  | "different"
  | "custom";
/**
* Types of resources that are part of group
*/
export type GroupType =
  | "person"
  | "animal"
  | "practitioner"
  | "device"
  | "medication"
  | "substance";
/**
* The status of a guidance response
*/
export type GuidanceResponseStatus =
  | "success"
  | "data-requested"
  | "data-required"
  | "in-progress"
  | "failure"
  | "entered-in-error";
/**
* The days of the week
*/
export type DaysOfWeek = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
/**
* Availability of the resource
*/
export type InstanceAvailability =
  | "ONLINE"
  | "OFFLINE"
  | "NEARLINE"
  | "UNAVAILABLE";
/**
* The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine
*/
export type ImmunizationStatusCodes = "completed" | "entered-in-error";
/**
* How a dependency is represented when the guide is published
*/
export type GuideDependencyType = "reference" | "inclusion";
/**
* The kind of an included page
*/
export type GuidePageKind =
  | "page"
  | "example"
  | "list"
  | "include"
  | "directory"
  | "dictionary"
  | "toc"
  | "resource";
/**
* Used to distinguish different roles a resource can play within a set of linked resources
*/
export type LinkageType = "source" | "alternate" | "historical";
/**
* The current state of the list
*/
export type ListStatus = "current" | "retired" | "entered-in-error";
/**
* Indicates whether the location is still in use
*/
export type LocationStatus = "active" | "suspended" | "inactive";
/**
* Indicates whether a resource instance represents a specific location or a class of locations
*/
export type LocationMode = "instance" | "kind";
/**
* The status of the measure report
*/
export type MeasureReportStatus = "complete" | "pending" | "error";
/**
* The type of the measure report
*/
export type MeasureReportType = "individual" | "patient-list" | "summary";
/**
* Whether the media is a photo, video, or audio
*/
export type DigitalMediaType = "photo" | "video" | "audio";
/**
* A coded concept defining if the medication is in active use
*/
export type MedicationStatus = "active" | "inactive" | "entered-in-error";
/**
* A set of codes indicating the current status of a MedicationAdministration
*/
export type MedicationAdministrationStatus =
  | "in-progress"
  | "on-hold"
  | "completed"
  | "entered-in-error"
  | "stopped"
  | "unknown";
/**
* A coded concept specifying the state of the dispense event.
*/
export type MedicationDispenseStatus =
  | "preparation"
  | "in-progress"
  | "on-hold"
  | "completed"
  | "entered-in-error"
  | "stopped";
/**
* A coded concept specifying the state of the prescribing event. Describes the lifecycle of the prescription
*/
export type MedicationRequestStatus =
  | "active"
  | "on-hold"
  | "cancelled"
  | "completed"
  | "entered-in-error"
  | "stopped"
  | "draft"
  | "unknown";
/**
* The kind of medication order
*/
export type MedicationRequestIntent =
  | "proposal"
  | "plan"
  | "order"
  | "instance-order";
/**
* Identifies the level of importance to be assigned to actioning the request
*/
export type MedicationRequestPriority = "routine" | "urgent" | "stat" | "asap";
/**
* A coded concept indicating the current status of a MedicationStatement
*/
export type MedicationStatementStatus =
  | "active"
  | "completed"
  | "entered-in-error"
  | "intended"
  | "stopped"
  | "on-hold";
/**
* A coded concept identifying level of certainty if patient has taken or has not taken the medication
*/
export type MedicationStatementTaken = "y" | "n" | "unk" | "na";
/**
* The kind of response to a message
*/
export type ResponseType = "ok" | "transient-error" | "fatal-error";
/**
* Identifies the style of unique identifier used to identify a namespace
*/
export type NamingSystemIdentifierType = "oid" | "uuid" | "uri" | "other";
/**
* Identifies the purpose of the naming system
*/
export type NamingSystemType = "codesystem" | "identifier" | "root";
/**
* Codes specifying the state of the request. Describes the lifecycle of the nutrition order
*/
export type NutritionOrderStatus =
  | "proposed"
  | "draft"
  | "planned"
  | "requested"
  | "active"
  | "on-hold"
  | "completed"
  | "cancelled"
  | "entered-in-error";
/**
* Codes specifying how two observations are related
*/
export type ObservationRelationshipType =
  | "has-member"
  | "derived-from"
  | "sequel-to"
  | "replaces"
  | "qualified-by"
  | "interfered-by";
/**
* Whether an operation parameter is an input or an output parameter
*/
export type OperationParameterUse = "in" | "out";
/**
* Whether an operation is a normal operation or a query
*/
export type OperationKind = "operation" | "query";
/**
* How the issue affects the success of the action
*/
export type IssueSeverity = "fatal" | "error" | "warning" | "information";
/**
* The type of link between this patient resource and another patient resource
*/
export type LinkType = "replaced-by" | "replaces" | "refer" | "seealso";
/**
* The level of confidence that this link represents the same actual person, based on NIST Authentication Levels
*/
export type IdentityAssuranceLevel = "level1" | "level2" | "level3" | "level4";
/**
* Defines organization behavior of a group
*/
export type ActionGroupingBehavior =
  | "visual-group"
  | "logical-group"
  | "sentence-group";
/**
* Defines selection behavior of a group
*/
export type ActionSelectionBehavior =
  | "any"
  | "all"
  | "all-or-none"
  | "exactly-one"
  | "at-most-one"
  | "one-or-more";
/**
* Defines requiredness behavior for selecting an action or an action group
*/
export type ActionRequiredBehavior =
  | "must"
  | "could"
  | "must-unless-documented";
/**
* Defines selection frequency behavior for an action or group
*/
export type ActionPrecheckBehavior = "yes" | "no";
/**
* Defines behavior for an action or a group for how many times that item may be repeated
*/
export type ActionCardinalityBehavior = "single" | "multiple";
/**
* The type of trigger
*/
export type TriggerType =
  | "named-event"
  | "periodic"
  | "data-added"
  | "data-modified"
  | "data-removed"
  | "data-accessed"
  | "data-access-ended";
/**
* Defines the kinds of conditions that can appear on actions
*/
export type ActionConditionKind = "applicability" | "start" | "stop";
/**
* Defines the types of relationships between actions
*/
export type ActionRelationshipType =
  | "before-start"
  | "before"
  | "before-end"
  | "concurrent-with-start"
  | "concurrent"
  | "concurrent-with-end"
  | "after-start"
  | "after"
  | "after-end";
/**
* Codes indicating the degree of authority/intentionality associated with a request
*/
export type RequestIntent =
  | "proposal"
  | "plan"
  | "order"
  | "original-order"
  | "reflex-order"
  | "filler-order"
  | "instance-order"
  | "option";
/**
* The clinical priority of a diagnostic order
*/
export type RequestPriority = "routine" | "urgent" | "asap" | "stat";
/**
* List of allowable action which this resource can request
*/
export type ActionList = "cancel" | "poll" | "reprocess" | "status";
/**
* How an entity was used in an activity
*/
export type ProvenanceEntityRole =
  | "derivation"
  | "revision"
  | "quotation"
  | "source"
  | "removal";
/**
* Distinguishes groups from questions and display text and indicates data type for questions
*/
export type QuestionnaireItemType =
  | "group"
  | "display"
  | "boolean"
  | "decimal"
  | "integer"
  | "date"
  | "dateTime"
  | "time"
  | "string"
  | "text"
  | "url"
  | "choice"
  | "open-choice"
  | "attachment"
  | "reference"
  | "quantity";
/**
* Lifecycle status of the questionnaire response
*/
export type QuestionnaireResponseStatus =
  | "in-progress"
  | "completed"
  | "amended"
  | "entered-in-error"
  | "stopped";
/**
* Codes that convey the current status of the research study
*/
export type ResearchStudyStatus =
  | "draft"
  | "in-progress"
  | "suspended"
  | "stopped"
  | "completed"
  | "entered-in-error";
/**
* Indicates the progression of a study subject through a study
*/
export type ResearchSubjectStatus =
  | "candidate"
  | "enrolled"
  | "active"
  | "suspended"
  | "withdrawn"
  | "completed";
/**
* How a search parameter relates to the set of elements returned by evaluating its xpath query
*/
export type XPathUsageType =
  | "normal"
  | "phonetic"
  | "nearby"
  | "distance"
  | "other";
/**
* What Search Comparator Codes are supported in search
*/
export type SearchComparator =
  | "eq"
  | "ne"
  | "gt"
  | "lt"
  | "ge"
  | "le"
  | "sa"
  | "eb"
  | "ap";
/**
* A supported modifier for a search parameter
*/
export type SearchModifierCode =
  | "missing"
  | "exact"
  | "contains"
  | "not"
  | "text"
  | "in"
  | "not-in"
  | "below"
  | "above"
  | "type";
/**
* Type for quality report
*/
export type QualityType = "indel" | "snp" | "unknown";
/**
* Type for access of external URI
*/
export type RepositoryType =
  | "directlink"
  | "openapi"
  | "login"
  | "oauth"
  | "other";
/**
* Type if a sequence -- DNA, RNA, or amino acid sequence
*/
export type SequenceType = "aa" | "dna" | "rna";
/**
* The free/busy status of the slot
*/
export type SlotStatus =
  | "busy"
  | "free"
  | "busy-unavailable"
  | "busy-tentative"
  | "entered-in-error";
/**
* Codes providing the status/availability of a specimen
*/
export type SpecimenStatus =
  | "available"
  | "unavailable"
  | "unsatisfactory"
  | "entered-in-error";
/**
* Defines the type of structure that a definition is describing
*/
export type StructureDefinitionKind =
  | "primitive-type"
  | "complex-type"
  | "resource"
  | "logical";
/**
* How an extension context is interpreted
*/
export type ExtensionContext = "resource" | "datatype" | "extension";
/**
* How a type relates to its baseDefinition
*/
export type TypeDerivationRule = "specialization" | "constraint";
/**
* How the referenced structure is used in this mapping
*/
export type StructureMapModelMode =
  | "source"
  | "queried"
  | "target"
  | "produced";
/**
* If this is the default rule set to apply for the source type, or this combination of types
*/
export type StructureMapGroupTypeMode = "none" | "types" | "type-and-types";
/**
* Mode for this instance of data
*/
export type StructureMapInputMode = "source" | "target";
/**
* If field is a list, how to manage the source
*/
export type StructureMapSourceListMode =
  | "first"
  | "not_first"
  | "last"
  | "not_last"
  | "only_one";
/**
* How to interpret the context
*/
export type StructureMapContextType = "type" | "variable";
/**
* If field is a list, how to manage the production
*/
export type StructureMapTargetListMode = "first" | "share" | "last" | "collate";
/**
* How data is copied/created
*/
export type StructureMapTransform =
  | "create"
  | "copy"
  | "truncate"
  | "escape"
  | "cast"
  | "append"
  | "translate"
  | "reference"
  | "dateOP"
  | "uuid"
  | "pointer"
  | "evaluate"
  | "cc"
  | "c"
  | "qty"
  | "id"
  | "cp";
/**
* The type of method used to execute a subscription
*/
export type SubscriptionChannelType =
  | "rest-hook"
  | "websocket"
  | "email"
  | "sms"
  | "message";
/**
* The status of a subscription
*/
export type SubscriptionStatus = "requested" | "active" | "error" | "off";
/**
* A code to indicate if the substance is actively used
*/
export type FHIRSubstanceStatus = "active" | "inactive" | "entered-in-error";
/**
* Status of the supply delivery
*/
export type SupplyDeliveryStatus =
  | "in-progress"
  | "completed"
  | "abandoned"
  | "entered-in-error";
/**
* The current status of the task
*/
export type TaskStatus =
  | "draft"
  | "requested"
  | "received"
  | "accepted"
  | "rejected"
  | "ready"
  | "cancelled"
  | "in-progress"
  | "on-hold"
  | "failed"
  | "completed"
  | "entered-in-error";
/**
* The type of participant
*/
export type TestReportParticipantType = "test-engine" | "client" | "server";
/**
* The results of executing an action
*/
export type TestReportActionResult =
  | "pass"
  | "skip"
  | "fail"
  | "warning"
  | "error";
/**
* The current status of the test report
*/
export type TestReportStatus =
  | "completed"
  | "in-progress"
  | "waiting"
  | "stopped"
  | "entered-in-error";
/**
* The reported execution result
*/
export type TestReportResult = "pass" | "fail" | "pending";
/**
* The content or mime type
*/
export type ContentType = "xml" | "json" | "ttl" | "none";
/**
* The type of direction to use for assertion
*/
export type AssertionDirectionType = "response" | "request";
/**
* The type of operator to use for assertion
*/
export type AssertionOperatorType =
  | "equals"
  | "notEquals"
  | "in"
  | "notIn"
  | "greaterThan"
  | "lessThan"
  | "empty"
  | "notEmpty"
  | "contains"
  | "notContains"
  | "eval";
/**
* The allowable request method or HTTP operation codes
*/
export type TestScriptRequestMethodCode =
  | "delete"
  | "get"
  | "options"
  | "patch"
  | "post"
  | "put";
/**
* The type of response code to use for assertion
*/
export type AssertionResponseTypes =
  | "okay"
  | "created"
  | "noContent"
  | "notModified"
  | "bad"
  | "forbidden"
  | "notFound"
  | "methodNotAllowed"
  | "conflict"
  | "gone"
  | "preconditionFailed"
  | "unprocessable";
/**
* The kind of operation to perform as a part of a property based filter
*/
export type FilterOperator =
  | "="
  | "is-a"
  | "descendent-of"
  | "is-not-a"
  | "regex"
  | "in"
  | "not-in"
  | "generalizes"
  | "exists";
/**
* A coded concept listing the eye codes
*/
export type VisionEyes = "right" | "left";
/**
* A coded concept listing the base codes
*/
export type VisionBase = "up" | "down" | "in" | "out";
/**
 * Issue Type
 * 
 * http://hl7.org/fhir/issue-type 
 */
 export type IssueType = "invalid"
 | "structure"
 | "required"
 | "value"
 | "invariant"
 | "security"
 | "login"
 | "unknown"
 | "expired"
 | "forbidden"
 | "suppressed"
 | "processing"
 | "not-supported"
 | "duplicate"
 | "multiple-matches"
 | "not-found"
 | "deleted"
 | "too-long"
 | "code-invalid"
 | "extension"
 | "too-costly"
 | "business-rule"
 | "conflict"
 | "transient"
 | "lock-error"
 | "no-store"
 | "exception"
 | "timeout"
 | "incomplete"
 | "throttled"
 | "informational";
