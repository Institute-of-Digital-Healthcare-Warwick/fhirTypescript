import { Consent } from "./Consent.ts";
import { DomainResource } from "./DomainResource.ts";
import { Practitioner } from "./Practitioner.ts";
import { Questionnaire } from "./Questionnaire.ts";
import { QuestionnaireResponse } from "./QuestionnaireResponse.ts";


/**
 * Reference to a sub-type of ResourceBase. This is needed for stricter object literal typing introduced in TypeScript 1.6.
 * 
 * ToDo: Uncomment resources as interfaces are added
 */
export type Resource =
	| DomainResource
	// | Account
	// | ActivityDefinition
	// | AdverseEvent
	// | AllergyIntolerance
	// | Appointment
	// | AppointmentResponse
	// | AuditEvent
	// | Basic
	// | BodySite
	// | CapabilityStatement
	// | CarePlan
	// | CareTeam
	// | ChargeItem
	// | Claim
	// | ClaimResponse
	// | ClinicalImpression
	// | CodeSystem
	// | Communication
	// | CommunicationRequest
	// | CompartmentDefinition
	// | Composition
	// | ConceptMap
	// | Condition
	| Consent
	// | Contract
	// | Coverage
	// | DataElement
	// | DetectedIssue
	// | Device
	// | DeviceComponent
	// | DeviceMetric
	// | DeviceRequest
	// | DeviceUseStatement
	// | DiagnosticReport
	// | DocumentManifest
	// | DocumentReference
	// | EligibilityRequest
	// | EligibilityResponse
	// | Encounter
	// | Endpoint
	// | EnrollmentRequest
	// | EnrollmentResponse
	// | EpisodeOfCare
	// | ExpansionProfile
	// | ExplanationOfBenefit
	// | FamilyMemberHistory
	// | Flag
	// | Goal
	// | GraphDefinition
	// | Group
	// | GuidanceResponse
	// | HealthcareService
	// | ImagingManifest
	// | ImagingStudy
	// | Immunization
	// | ImmunizationRecommendation
	// | ImplementationGuide
	// | Library
	// | Linkage
	// | List
	| Location
	// | Measure
	// | MeasureReport
	// | Media
	// | Medication
	// | MedicationAdministration
	// | MedicationDispense
	// | MedicationRequest
	// | MedicationStatement
	// | MessageDefinition
	// | MessageHeader
	// | NamingSystem
	// | NutritionOrder
	// | Observation
	// | OperationDefinition
	// | OperationOutcome
	// | Organization
	// | Patient
	// | PaymentNotice
	// | PaymentReconciliation
	// | Person
	// | PlanDefinition
	| Practitioner
	// | PractitionerRole
	// | Procedure
	// | ProcedureRequest
	// | ProcessRequest
	// | ProcessResponse
	// | Provenance
	| Questionnaire
	| QuestionnaireResponse
	// | ReferralRequest
	// | RelatedPerson
	// | RequestGroup
	// | ResearchStudy
	// | ResearchSubject
	// | RiskAssessment
	// | Schedule
	// | SearchParameter
	// | Sequence
	// | ServiceDefinition
	// | Slot
	// | Specimen
	// | StructureDefinition
	// | StructureMap
	// | Subscription
	// | Substance
	// | SupplyDelivery
	// | SupplyRequest
	// | Task
	// | TestReport
	// | TestScript
	// | ValueSet
	// | VisionPrescription
	// | Binary
	// | Bundle
	// | Parameters
	;