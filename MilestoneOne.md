hello

We split our Use Case Diagram into five smaller diagrams based on each use case's primary actor, as seen in the following sections.

## Admin Use Cases
Figure 1, below, outlines the use cases that may be executed by a system admin. Tables 1-5 describe each use case in more detail.

![Use Case Diagram](Admin_UCD.png)

**Figure 1:** A Use Case Diagram describing the Mister Ed system from the perspective of the Admin actor.

<br>**Table 1**: Create User Profile Use Case.
| Use Case                | Create User Profile     |
|-------------------------|-------------------------|
| Description             |  |
| Actors                  | - Admin (primary) |
| Assumptions             | -  |
| Steps                   | 1.  | 
| Variations (Optional)   | #1: |
| Non-Functional (Optional) | **Security**:  |
| Issues                  | -  |

<br>**Table 2**: View User Profile Use Case.
| Use Case                | View User Profile     |
|-------------------------|-------------------------|
| Description             |  |
| Actors                  | - Admin (primary) |
| Assumptions             | -  |
| Steps                   | 1.  | 
| Variations (Optional)   | #1: |
| Non-Functional (Optional) | **Security**: User password will be obfuscated. |
| Issues                  | -  |

<br>**Table 3**: Modify User Profile Use Case.
| Use Case                | Modify User Profile     |
|-------------------------|-------------------------|
| Description             |  |
| Actors                  | - Admin (primary) |
| Assumptions             | -  |
| Steps                   | 1.  | 
| Variations (Optional)   | #1: |
| Non-Functional (Optional) | **Security**: |
| Issues                  | -  |

<br>**Table 4**: View User Access Use Case.
| Use Case                | View User Access     |
|-------------------------|-------------------------|
| Description             |  |
| Actors                  | - Admin (primary) |
| Assumptions             | -  |
| Steps                   | 1.  | 
| Variations (Optional)   | #1: |
| Non-Functional (Optional) | **Security**: |
| Issues                  | -  |

<br>**Table 5**: Modify User Access Use Case.
| Use Case                | Modify User Access     |
|-------------------------|-------------------------|
| Description             |  |
| Actors                  | - Admin (primary) |
| Assumptions             | -  |
| Steps                   | 1.  | 
| Variations (Optional)   | #1: |
| Non-Functional (Optional) | **Security**: |
| Issues                  | -  |

## (Old) Use Cases

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


<br>Provide Recommendation Use Case (Tristan Cornwell):
| Use Case                | Provide Recommendation                                                    |
|-------------------------|---------------------------------------------------------------------------|
| Description             | System interprets the results of a user's virtual triage and provides a recommendation to the user on how to proceed with treatment. |
| Actors                  | - Mister Ed System (primary) <br> - User <br> - Emergency Department Database |
| Assumptions             | - User has filled in all required information in the registration and virtual triage. <br> - User is logged in to the system. |
| Steps                   | 1. System acknowledges that it has received user information. <br> 2. System starts searching for a nearby ED. <br> 3. REPEAT <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.1 System finds an ED within 40km of the user's address. <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.2 System checks the estimated wait time for the ED. <br> &nbsp;&nbsp;&nbsp; UNTIL there are no more EDs within 40km of the user. <br> 4. System displays the given EDs and their corresponding wait times to the user. <br> 4. User selects their desired ED. <br> 5. System places user in the queue for the chosen ED. | 
| Variations (Optional)   | #2: System suggests that the user visit a primary care clinic **or** <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; System suggests that the user take a particular over-the-counter medication **or** <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; System suggests that the user contact the nurse/clinician hotline over the phone or internet and provides a phone number and URL. |
| Non-Functional (Optional) | **Performance**: time to find nearby EDs or provide an alternative recommendation must be less than 15 seconds. |
| Issues                  | - What if there aren't any EDs close enough to the user? |


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


<br>View ED Load Use Case (Paisley Lewis):
| Use Case           | View ED Load                                                                           |
|-------------------------|---------------------------------------------------------------------------|
| Use Case                | Understand the current load of EDs in the user's area                     |
| Description             | View capacity percentages and estimated wait times by emergency severity of nearby EDs. |
| Actors                  | -User (primary) <br> -Emergency Department Database <br> - MisterEd System              |
| Assumptions             | The user has inputted their location into the system so that nearby EDs can be found. <br> The user is logged into the MisterEd system. |
| Steps                   | 1. User selects ED of choice from a list of nearby EDs. <br> 2. System loads waiting room and bed records from the ED database. <br> 3. The system calculates capacity percentage from the number of ED beds currently in use. <br> 4. The System calculates wait times by emergency severity from waiting room records. <br> 5. The system displays calculated data. <br> 6. User views data to make their decision about which ED to go to. |
| Non-Function            | Speed: The time to calculate and display data must be less than 5 seconds from the time the user selects the ED location. <br> Accuracy: Displayed estimated wait times must be within 10% of actual wait times. |
| Issues                  | What is the most accurate way to split emergency severity to calculate wait times? |

## System Database Use Cases
Figure 5, below, outlines the use cases that may be executed by the system database. Tables x-x describe each use case in more detail.

![Use Case Diagram](Database_UCD.png)

**Figure 5:** A Use Case Diagram describing the Mister Ed system from the perspective of the System Database actor.

<br>**Table x**: Store Patient Information Use Case.
| Use Case                | Store Patient Information     |
|-------------------------|-------------------------|
| Description             | Store any information inputted by a patient for later reference. |
| Actors                  | - System Database (primary) <br> - Patient |
| Assumptions             | - Patient does not yet have an account. <br> - Patient has an internet connection. |
| Steps                   | 1. Patient provides their Name, Contact Information, Username, Password, and Personal Health Number during account creation. <br> 2. The provided encrypted information is passed to the system database. <br>  3. The database decrypts the information. 4. A new entry is created in the accounts table in the database. <br> 5. The patient information is stored in that entry. | 
| Non-Functional  | **Security**: The data provided is sensitive and must be encrypted so that it cannot be intercepted and read. |
| Issues                  | What if the patient does not provide all the required information fields? |

<br>**Table x**: Store Questionnaire Responses Use Case.
| Use Case                | Store Questionnaire Responses     |
|-------------------------|-------------------------|
| Description             | Store any responses to the triage questionnaire from the patient in the system database. |
| Actors                  | - System Database (primary) |
| Assumptions             | - Patient has an account. <br> - The patient has just submitted a triage questionnaire. <br> - Patient has an internet connection. |
| Steps                   | 1. The provided encrypted questionnaire questions and answers are passed to the system database. <br>  3. The database decrypts the information. 4. A new entry is created in the questionnaire table in the database. <br> 5. The patient username is used as the key and each response to a question is stored in a separate column. | 
| Non-Functional  | **Security**: The data provided is sensitive and must be encrypted so that it cannot be intercepted and read. |
| Issues                  | What if the patient does not answer all questions? |

<br>**Table x**: Store Reccomendations Responses Use Case.
| Use Case                | Store Questionnaire Responses     |
|-------------------------|-------------------------|
| Description             | Store any recommendation results to the patient triage questionnaire in the system database. |
| Actors                  | - System Database (primary) |
| Assumptions             | - The patient has submitted a triage questionnaire. <br> - Mister Ed system or Medical Professional have submitted recommendations. |
| Steps                   | 1. The provided encrypted recommendations are passed to the system database. <br>  3. The database decrypts the information. 4. A new entry is created in the recommendation table in the database. <br> 5. The patient username and questionnaire ID are used as the key and the recommendation and source of recommendation are stored in that entry. | 
| Non-Functional  | **Security**: The data provided is sensitive and must be encrypted so that it cannot be intercepted and read. |
| Issues                  | What if the recommendation came from a Medical Professional, should their name be added to the database entry? |

<br>**Table x**: Calculate ED Wait Time and Capacity Use Case.
| Use Case                | Calculate ED Wait Time and Capacity     |
|-------------------------|-------------------------|
| Description             | Calculate an ED's current wait time and capacity percentage from waiting room records. |
| Actors                  | - System Database (primary) <br> |
| Assumptions             | - System Database waiting room records have been recently updated. |
| Steps                   | 1. Pick ED to perform calculations for based off request or timeout. <br> 2. From the ED table get the number of beds in use and the number of total beds to get ED capacity. <br>  3. From the ED table get the number of medical staff currently working and the ED capacity percentage to calculate wait time based on emergency severity. 4. Update ED table capacity percentage and wait time columns. <br> 5. Update timeout timestamp. | 
| Non-Functional  | **Efficency**: The time to perform calculations and save data must be less than 5 seconds. <br> **Accuracy**: Displayed estimated wait times must be within 10% of actual wait times. |
| Issues                  | What is the most accurate way to split emergency severity to calculate wait times? |

<br>**Table x**: Send Call Centre ED Update Use Case.
| Use Case                | Send Call Centre ED Update     |
|-------------------------|-------------------------|
| Description             | Send calculated ED capacity percentage and wait time information to the call centre so they can notify the next patients on the waiting list. |
| Actors                  | - System Database (primary) |
| Assumptions             | - ED calculations have just been performed and saved in the System Database. |
| Steps                   | 1. Database collects ED Name, Capacity Percentage, and Wait Time. <br> 2. The information is encrypted for transmission. <br>  3. The database transmits the information to the Call Centre. | 
| Non-Functional  | **Security**: The patient data provided is sensitive and must be encrypted so that it cannot be intercepted and read. |
| Issues                  | What if the call centre does not want constant updates? |

