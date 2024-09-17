hello

![Use Case Diagram](MisterED_UCD.png)

**Figure 1:** A Use Case Diagram describing the MisterED system


## Use Case Template

| Use Case                | Use case identifier and reference number and modification history         |
|-------------------------|---------------------------------------------------------------------------|
| Description             | Goal to be achieved by use case and sources for requirement               |
| Actors                  | List of actors involved in use case                                       |
| Assumptions             | Conditions that must be true for use case to terminate successfully       |
| Steps                   | Interactions between actors and system that are necessary to achieve goal |
| Variations (Optional)   | Any variations in the steps of a use case                                 |
| Non-Functional (Optional) | List of non-functional requirements that the use case must meet.          |
| Issues                  | List of  issues that remain to be resolved                                |

## Use Cases

<br>Patient Registration Use Case (Tay Munro):
| **Use Case**      | Patient Registration |
|-------------------|-------------------------------|
| **Description**   | This use case allows a patient to register virtually using the Mister Ed system. The system collects patient details, validates the input, and registers the patient into the emergency department queue.|
| **Actors**        | Patient, Mister Ed System, ED Staff |
| **Assumptions**   | The patient has internet access, the system is online, and the patient can enter correct information. |
| **Steps**         | 1. Patient accesses Mister Ed System.<br> 2. Patient provides personal details (name, age, symptoms, etc.).<br> 3. Mister Ed validates patient details.<br> 4. The patient is registered in the system |
| **Variations (Optional)** | 1. Patient already has an account and logs in instead of providing details.<br> 2. Patient chooses not to proceed after seeing the current ED load.<br> 3. System fails to validate patient details (e.g., incorrect or incomplete information). |
| **Non-Functional (Optional)** | 1. The system should handle at least 10,000 concurrent registrations without performance degradation.<br> 2. Registration should take less than 2 minutes per patient. |
| **Issues**        | 1. How to handle patients with limited internet access.<br> 2. Integrating with external triage systems.<br> 3. Data security and patient privacy concerns. |

<br>Provide Recommendation Use Case (Tristan Cornwell):
| Use Case                | Provide Recommendation                                                    |
|-------------------------|---------------------------------------------------------------------------|
| Description             | System interprets the results of a patient's virtual triage and provides a recommendation to the patient on how to proceed with treatment. |
| Actors                  | MisterED System (primary), Patient |
| Assumptions             | Patient has filled in all required information in the registration and virtual triage.<br> Patient is logged in to the MisterED system. |
| Steps                   | 1. System notifies patient that it has received their information. <br> 2. System starts searching for a nearby ER. <br> 3. REPEAT <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.1 System finds an ER within 40km of the patient's address. <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.2 System checks the estimated wait time for the ER. <br> &nbsp;&nbsp;&nbsp; UNTIL there are no more ERs within 40km of the patient. <br> 4. System displays the given ERs and their corresponding wait times to the patient. <br> 4. Patient selects their desired ER. <br> 5. System places patient in the queue for the chosen ER | 
| Variations (Optional)   | 2. System suggests that the patient visit a primary care clinic **or** <br> &nbsp;&nbsp;&nbsp; System suggests that the patient take a particular over-the-counter medication **or** <br> &nbsp;&nbsp;&nbsp; System suggests that the patient contact the nurse/clinician hotline over the phone or Internet and provides a phone number and URL. |
| Non-Functional (Optional) | Performance: time to find nearby ERs or provide an alternative recommendation must be less than 15 seconds. |
| Issues                  | What if there aren't any ERs close enough to the patient? |

<br>Patient Virtual Triage Use Case (Lachlan Paulsen):
| **Use Case**      | Patient Virtual Triage |
|-------------------|-------------------------------|
| **Description**   | The Virtual Triage use case allows patients to input their symptoms into the MisterEd system. Based on this input, the system analyzes how urgent the patient's condition is. The system shall provide recommendations such as visiting the ED, visiting a GP, or waiting at home. This helps to mitigate ED congestion by providing patients with appropriate care suggestions for their condition.|
| **Actors**        |  Patient (Primary), Mister Ed System, Nurse | 
| **Assumptions**   | - The patient has an internet-connected device to access the Mister Ed system. <br>The system has access to up to date symptom triage protocols. <br> The patient's symptoms are accurately input into the system. |
| **Steps**         | 1. The patient logs into the Mister Ed system. <br> 2. The patient enters symptoms through a questionnaire or input form. <br> 3. The system uses predefined medical logic to assess the severity of the patient's symptoms. <br> 4. Based on the analysis, the system provides the patient with a recommendation. <br> 5. The patient can either follow the recommendation or contact a clinician for further advice. |
| **Variations (Optional)** | 1. If the patient’s symptoms are vague or unclear, the system may ask for additional details. <br> 2. If the system cannot determine a clear outcome, it may notify a nurse or clinician for a manual review. |
| **Non-Functional (Optional)** | 	1. The system shall follow current privacy and data protection standards. <br> 2. The system shall be responsive and scalable to handle large numbers of users at all times. <br> 3. The system’s interface shall be user-friendly to ensure patients of all ages and technical skills can understand how to effectively use the system. |
| **Issues**        | 1. Risk of patients entering inaccurate information. <br> 2. The system’s accuracy heavily depends on the quality of the medical logic used in the backend.|

