hello

![Use Case Diagram](MisterED_UCD.png)

**Figure 1:** A Use Case Diagram describing the MisterED system


| Use Case Template       |                                                                           |
|-------------------------|---------------------------------------------------------------------------|
| Use Case                | Use case identifier and reference number and modification history         |
| Description             | Goal to be achieved by use case and sources for requirement               |
| Actors                  | List of actors involved in use case                                       |
| Assumptions             | Conditions that must be true for use case to terminate successfully       |
| Steps                   | Interactions between actors and system that are necessary to achieve goal |
| Variations (Optional)   | Any variations in the steps of a use case                                 |
| Non-Function (Optional) | List of non-functional requirements that the use case must meet.          |
| Issues                  | List of  issues that remain to be resolved                                |

<br> Notify Patient Use Case (Luca Bolzonello):
| **Use Case**        | Notify Patient                                                                                                            |
|---------------------|---------------------------------------------------------------------------------------------------------------------------|
| **Description**     | This use case allows a user to choose their preferred notification method (Phone Call, Text). The user is notified when the ED is ready for them, with sufficient notice to arrive while there is still an opening. |
| **Actors**          | **Users**: Identified by "Virtual Triage" as safe to wait at home but should attend the ED.<br>**Callers**: Employees who monitor the queue and call Users requesting Phone Call notifications.<br>**Text Delivery System**: System that sends text notifications to Users requesting Text notifications.<br>**ED Capacity Tracker**: Monitors ED activity, urgency, and commute time, flagging patients to be notified. |
| **Assumptions**     | - Virtual triage assesses patient urgency correctly.<br>- ED Capacity Tracker matches urgency, capacity, and commute times to notify patients timely.<br>- Users correctly enter their notification preferences. |
| **Steps**           | 1. Caller queries the ED Capacity Tracker for the next person to call.<br>2. Caller calls the User, informs them to go to the ED, confirms their attendance, and answers questions. |
| **Variations**      | 1. The Text Delivery System queries the ED Capacity Tracker for the next person to text.<br>2. The Text Delivery System sends a text notification to the User, informing them to go to the ED. |
| **Non-Functional**  | - Privacy<br>- Robustness<br>- Accessibility<br>- Safety                                                                 |
| **Issues**          | How to ensure that Users always receive the notification.                                                                 |
                                                        


<br>Patient Registration Use Case (Tay Munro):
| **Use Case**      | Patient Registration |
|-------------------|-------------------------------|
| **Description**   | This use case allows a patient to register virtually using the Mister Ed system. The system collects patient details, validates the input, and registers the patient into the emergency department queue.|
| **Actors**        | Patient, Mister Ed System, ED Staff |
| **Assumptions**   | The patient has internet access, the system is online, and the patient can enter correct information. |
| **Steps**         | 1. Patient accesses Mister Ed System.<br> 2. Patient provides personal details (name, age, symptoms, etc.).<br> 3. Mister Ed validates patient details.<br> 4. The patient is registered in the system |
| **Variations (Optional)** | 1. Patient already has an account and logs in instead of providing details.<br> 2. Patient chooses not to proceed after seeing the current ED load.<br> 3. System fails to validate patient details (e.g., incorrect or incomplete information). |
| **Non-Functional (Optional or NFRs)** | 1. The system should handle at least 10,000 concurrent registrations without performance degradation.<br> 2. Registration should take less than 2 minutes per patient. |
| **Issues**        | 1. How to handle patients with limited internet access.<br> 2. Integrating with external triage systems.<br> 3. Data security and patient privacy concerns. |

