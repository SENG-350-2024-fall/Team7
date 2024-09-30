
### Table of Contents:

- [Patient Use Cases](#patient-use-cases)
    - [Register/Login Use Case.](#table-1-registerlogin-use-case)
    - [View ED Load Use Case.](#table-2-view-ed-load-use-case)
    - [Enter Symptom Information Use Case.](#table-3-enter-symptom-information-use-case)
    - [View Treatment Options Use Case.](#table-4-view-treatment-options-use-case)
    - [Enter ED Queue Use Case.](#table-5-enter-ed-queue-use-case)
- [Medical Staff Use Cases](#medical-staff-use-cases)
    - [Review Symptoms.](#table-6-review-symptoms)
    - [View Patient Medical History.](#table-7-view-patient-medical-history)
    - [Make Recommendation.](#table-8-make-recommendation)
    - [View Triage.](#table-9-view-triage)
- [Admin Use Cases](#admin-use-cases)
    - [Create User Profile Use Case.](#table-10-create-user-profile-use-case)
    - [View User Profile Use Case.](#table-11-view-user-profile-use-case)
    - [Modify User Profile Use Case.](#table-12-modify-user-profile-use-case)
    - [View User Access Use Case.](#table-13-view-user-access-use-case)
    - [Modify User Access Use Case.](#table-14-modify-user-access-use-case)
- [System Database Use Cases](#system-database-use-cases)
    - [Store Patient Information Use Case.](#table-15-store-patient-information-use-case)
    - [Store Questionnaire Responses Use Case.](#table-16-store-questionnaire-responses-use-case)
    - [Store Reccomendations Responses Use Case.](#table-17-store-reccomendations-responses-use-case)
    - [Calculate ED Wait Time and Capacity Use Case.](#table-18-calculate-ed-wait-time-and-capacity-use-case)
    - [Send Call Centre ED Update Use Case.](#table-19-send-call-centre-ed-update-use-case)
- [Call Center Use Cases](#call-center-use-cases)
    - [ViewQueue Use Case.](#table-20-viewqueue-use-case)
    - [ViewPatientInfo Use Case.](#table-21-viewpatientinfo-use-case)
    - [CallPatient Use Case.](#table-22-callpatient-use-case)
    - [NotifyED Use Case.](#table-23-notifyed-use-case)


We split our Use Case Diagram into five smaller diagrams based on each use case's primary actor, as seen in the following sections.

The Mister Ed system is a medical information system that enhances resources for emergency departments (EDs). Its purpose is to reduce crowded waitrooms and improve efficiency of patient flow. Its main feature is virtual triage which allows users to assess their symptoms and determine whether they should visit an ED or look for other treatments. This helps reduce unnecessary ED visits, taking the load off hospitals. <br>

The system also allows patients and medical staff to view the ED waitlist which provides real-time information on the capacity of local hospitals. This feature helps patients decide the best time and place to seek care while distributing patient loads across multiple locations. The virtual triage feature in Mister Ed provides recommendations which could include visiting a clinic, self-care instructions, or waiting at home until it’s time for an ED visit. The system notifies patients when to proceed to the hospital.<br>

In addition to these features, Mister Ed facilitates patient registration for the ED, reducing administrative tasks when patients arrive. The system integrates with the ED database, ensuring patient data is shared with healthcare providers. By connecting patients, medical staff, and emergency departments through virtual triage Mister Ed optimizes the use of healthcare resources, improves the overall patient experience, and reduces the load on medical staff.<br>


<a name="patient-use-cases"></a>
## Patient Use Cases
Figure 1, below, outlines the use cases that may be executed by a patient using the system. Tables 1-5 describe each use case in more detail.

![Use Case Diagram](UCDs/Patient_UCD.png)

**Figure 1:** A Use Case Diagram describing the Mister Ed system from the perspective of the Patient actor.

<br>

##### **Table 1**: Register/Login Use Case.
| Use Case                | Register/Login     |
|-------------------------|-------------------------|
| **Description**             | The patient registers if they are a first-time user or logs into the Mister Ed system using their credentials. This ensures secure access to the system. |
| **Actors**                  | - Patient (primary) |
| **Assumptions**             | - The patient has access to a device that is connected to the internet. <br>- The system securely stores patients' login credentials.|
| **Steps**                   | 1. The patient opens the Mister Ed system. <br>2. The patient either enters their login credentials or creates a new account. <br> 3. If creating a new account, the patient fills out the necessary details. <br> 4. The system authenticates the patient’s credentials. <br>5. The patient successfully gains access to the system. | 
| **Variations**   | #2 The patient may opt for a password reset if they forget their credentials. |
| **Non-Functional** | **Security**: The login system must adhere to data privacy regulations and ensure secure encryption. |
| **Issues**                  | - Forgotten credentials or system errors during login.  |


<br>

##### **Table 2**: View ED Load Use Case.
| Use Case                | View ED Load     |
|-------------------------|-------------------------|
| **Description**             |  The patient views the current load of emergency departments in their location, helping them choose the facility with the shortest wait time.|
| **Actors**                  | - Patient (primary) |
| **Assumptions**             | - The system has accurate data on ED load. <br>- The patient is already logged into the system. |
| **Steps**                   | 1. The patient selects the option to view the ED load. <br> 2. The system displays a list of nearby EDs with the current load. <br> 3. The patient views the information and decides what ED to visit based on the load. | 
| **Non-Functional** | **Security**: The system must provide data in real-time on the current ED load. |
| **Issues**                  | - System may delay in providing ED load updates |


<br>

##### **Table 3**: Enter Symptom Information Use Case.
| Use Case                | Enter Symptom Information    |
|-------------------------|-------------------------|
| **Description**             | The patient enters their symptoms into the system for a virtual triage to determine the urgency of their condition. |
| **Actors**                  | - Patient (primary) |
| **Assumptions**             | -The patient enters their symptoms accurately.  |
| **Steps**                   |1. The patient selects the option to enter symptom information. <br>2. The system provides the patient with a questionnaire to gather medical details. <br> 3. The patient inputs their symptoms. <br> 4. The system stores this information for analysis.  |
| **Non-Functional** | **Usability**: The system must be intuitive and simple to use for all users. |
| **Issues**                  | - Patients may provide vague or inaccurate information, which will affect the virtual triage result.  |

<br>

##### **Table 4**: View Treatment Options Use Case.
| Use Case                | View Treatment Options |
|-------------------------|-------------------------|
| **Description**             | The patient can view treatment options based on their symptoms. The system will recommend visiting an ED, going to a general practitioner (GP), or staying at home. |
| **Actors**                  | - Patient (primary) |
| **Assumptions**             | - The patient has completed symptom input. |
| **Steps**                   | 1. After entering symptoms, the patient views the suggested treatment options. <br> 2. The system displays recommendations based on the severity of the condition. <br> 3. The patient reviews and selects the appropriate option. | 
| **Non-Functional** | **Accuracy**: The treatment recommendations must be based on up-to-date medical standards and guidelines. |
| **Issues**                  | - Patients may not follow system recommendations.  |

<br>

##### **Table 5**: Enter ED Queue Use Case.
| Use Case                | Enter ED Queue    |
|-------------------------|-------------------------|
| **Description**             | The patient enters the queue for an ED if the system recommends this action. The patient can wait at home until it is their turn. |
| **Actors**                  | - Patient (primary) |
| **Assumptions**             | - The system accurately assesses the ED load and provides a reasonable waiting time.  |
| **Steps**                   | 1. The patient decides to enter the ED queue based on the system recommendation. <br> 2. The system assigns the patient a place in the queue and provides an estimated wait time. <br> 3. The patient waits at home and receives a notification when it is their turn to visit the ED. | 
| **Non-Functional** | **Accuracy**: The system must be accurate in estimating waiting times to avoid overcrowding at the ED. |
| **Issues**                | - Delays in the system notifying the patient could cause issues with estimated ED wait times. |


<a name="medical-staff-use-cases"></a>
## Medical Staff Use Cases
Figure 2, below, outlines the use cases that may be followed by medical staff when using the system. Tables 6-9 describe each use case in more detail.

![Use Case Diagram](UCDs/medical_staff.png)

**Figure 2:** A Use Case Diagram describing the Mister Ed system from the perspective of the Medical Staff actor.

<br>

##### **Table 6**: Review Symptoms.
| Use Case                | Review Symptoms    |
|-------------------------|-------------------------|
| **Description**         | Medical staff can review the symptoms provided by the patient during virtual registration. |
| **Actors**              | - Medical Staff (primary) |
| **Assumptions**         | - Medical staff has access to the Mister Ed system and patient records. <br> - Patient has provided symptom information. |
| **Steps**               | 1. Medical staff logs into the Mister Ed system. <br> 2. Staff accesses the patient's registered details. <br> 3. The system displays the patient's symptoms and any accompanying notes. <br> 4. Staff reviews the symptoms and determines the next steps|
| **Variations** | #1: Automated symptom analysis suggests possible conditions. |
| **Non-Functional** | **Security**: Ensure that symptom data is encrypted and only accessible by authorized medical staff. <br> **Performance**: Display patient symptom data in under 2 seconds after selection. |
| **Issues**              | - Patients may input incomplete or inaccurate information. <br> - Ensuring privacy while storing sensitive health data. |

<br>

##### **Table 7**: View Patient Medical History.
| Use Case Extension    | View Patient Medical History    |
|-------------------------|-------------------------|
| **Description**         | Medical staff can access the patient’s medical history to make informed decisions during triage or treatment. |
| **Steps**               | 1. Medical staff logs into the Mister Ed system. <br> 2. The staff selects the patient whose medical history is required. <br> 3. The system retrieves and displays relevant medical history (past diagnoses, treatments, medications, allergies). <br> 4. The staff reviews the history and uses it to make informed decisions. |
| **Non-Functional** | **Security**: Medical history should be encrypted, and access should be logged for audit purposes.|
| **Issues**              | - Incomplete integration with external medical records. <br> - Patient consent may be required for access to certain medical data. |

<br>

##### **Table 8**: Make Recommendation.

| Use Case                | Make Recommendation     |
|-------------------------|-------------------------|
| **Description**         | Medical staff can use Mister Ed to make recommendations based on the patient's symptoms and history. |
| **Actors**              | - Medical Staff (primary)) |
| **Assumptions**         | - The system has up-to-date patient information (symptoms, history). |
| **Steps**               | 1. Medical staff logs into the Mister Ed system. <br> 2. Staff reviews the patient's symptoms and medical history. <br> 3. Based on data, the staff selects a recommendation option from the system’s interface. <br> 4. The recommendation is communicated to the patient through the system. |
| **Non-Functional** | **Security**: Ensure recommendations are only made by authorized medical staff and not altered by unauthorized users.|
| **Issues**              | - Legal implications of incorrect recommendations. <br> - Ensuring that recommendations are personalized and not purely algorithmic. |

<br>

##### **Table 9**: View Triage.

| Use Case                | View Triage Queue    |
|-------------------------|-------------------------|
| **Description**         | Medical staff can view the current triage queue to prioritize patients based on severity, registration time, and other factors. |
| **Actors**              | - Medical Staff (primary)|
| **Assumptions**         | - The system updates the triage queue in real-time. <br> - Patients are properly registered and categorized based on triage requirements. |
| **Steps**               | 1. Medical staff logs into the Mister Ed system. <br> 2. The system displays the list of patients in the triage queue. <br> 3. Staff reviews the queue, with patients sorted by severity, registration time, or custom criteria. <br> 4. Staff selects patients for triage or treatment based on priority. |
| **Non-Functional** | **Security**: Access to the triage queue should be restricted to authorized personnel.|
| **Issues**              | - Handling high volumes of patients in the queue without overwhelming the system. <br> - Prioritization fairness and accuracy (e.g., ensuring that the most critical cases are prioritized properly). |


<a name="admin-use-cases"></a>
## Admin Use Cases
Figure 3, below, outlines the use cases that may be executed by a system admin. Tables 1-5 describe each use case in more detail.

![Use Case Diagram](UCDs/Admin_UCD.png)

**Figure 3:** A Use Case Diagram describing the Mister Ed system from the perspective of the Admin actor.

<br>

##### **Table 10**: Create User Profile Use Case.

| Use Case                | Create User Profile     |
|-------------------------|-------------------------|
| Description             | Create a system profile and configure system access for a medical staff member, call center operator, or admin.  |
| Actors                  | - Admin (primary) |
| Assumptions             | - Admin is logged in to the system. |
| Steps                   | 1. Generate a username by concatenating the user's first and last name, as well as a number representing the number of users currently in the system with that name. <br> 2. Generate a temporary password. <br> 3. Enter information about the user's position in their respective company (e.g., ED Nurse, ED Receptionist, Call Centre Manager). <br> 4. Configure what parts of the system the user has access to. <br> 5. Configure the level of patient information the user has access to. <br> 6. Send an email to the user's provided email with their temporary password. | 
| Non-Functional          | **Security**: An admin must not be able to create a user with more access than themselves. <br> **Security**: An admin must enter their password before creating an account. |
| Issues                  | - What if a user quits or is fired? |

<br>

##### **Table 11**: View User Profile Use Case.

| Use Case                | View User Profile     |
|-------------------------|-------------------------|
| Description             | View the system profile of a medical staff member, call center operator, or admin. |
| Actors                  | - Admin (primary) |
| Assumptions             | - Admin is logged in to the system. <br> - User profile has already been created. |
| Steps                   | 1. Search for a user by username, position, or company. <br> 2. Click on the user to view the user's profile. | 
| Non-Functional          | **Security**: User password must be obfuscated. <br> **Efficiency**: Search results must appear within 5 seconds. |
| Issues                  | - What if the system fails to match any user to a given search? |

<br>

##### **Table 12**: Modify User Profile Use Case.

| Use Case Extension      | Modify User Profile *extends* View User Profile |
|-------------------------|-------------------------|
| Description             | Admin decides to edit a profile that they are currently viewing. |
| Steps                   | 1. Click the "Edit" button to edit the user's profile. <br> 2. Make the desired changes. <br> 3. Click the "Save" button to confirm the changes. | 
| Non-Functional          | **Security**: An admin must not be able to modify a user's password. |
| Issues                  | - What if someone needs a history of who has modified a given user's profile? |

<br>

##### **Table 13**: View User Access Use Case.

| Use Case Extension      | View User Access *extends* View User Profile |
|-------------------------|-------------------------|
| Description             | Admin decides to view the system access for a profile that they are currently viewing. |
| Steps                   | 1. Click on the "Access" button to view the user's access to all parts of the system. |
| Issues                  | - What if a user has an account with no access to any part of the system? |

<br>

##### **Table 14**: Modify User Access Use Case.

| Use Case Extension      | Modify User Access *extends* View User Access |
|-------------------------|-------------------------|
| Description             | Admin decides to modify the system access for a profile that they are currently viewing. |
| Steps                   | 1. Click the "Edit" button to edit the user's access. <br> 2. Make the desired changes. <br> 3. Click the "Save" button to confirm the changes. | 
| Non-Functional          | **Security**: An admin must not be able to grant or revoke access that is higher than their own access. |
| Issues                  | - What if the admin attempts to modify their own access, or that of another admin? |


<a name="system-database-use-cases"></a>
## System Database Use Cases
Figure 4, below, outlines the use cases that may be executed by the system database. Tables x-x describe each use case in more detail.

![Use Case Diagram](UCDs/Database_UCD.png)

**Figure 4:** A Use Case Diagram describing the Mister Ed system from the perspective of the System Database actor.

<br>

##### **Table 15**: Store Patient Information Use Case.

| Use Case                | Store Patient Information     |
|-------------------------|-------------------------|
| **Description**             | Store any information inputted by a patient for later reference. |
| **Actors**                  | - System Database (primary) <br> - Patient |
| **Assumptions**             | - Patient does not yet have an account. <br> - Patient has an internet connection. |
| **Steps**                   | 1. Patient provides their Name, Contact Information, Username, Password, and Personal Health Number during account creation. <br> 2. The provided encrypted information is passed to the system database. <br>  3. The database decrypts the information. <br> 4. A new entry is created in the accounts table in the database. <br> 5. The patient information is stored in that entry. | 
| **Non-Functional**  | **Security**: The data provided is sensitive and must be encrypted so that it cannot be intercepted and read. |
| **Issues**                  | - What if the patient does not provide all the required information fields? |

<br>

##### **Table 16**: Store Questionnaire Responses Use Case.

| Use Case                | Store Questionnaire Responses     |
|-------------------------|-------------------------|
| **Description**             | Store any responses to the triage questionnaire from the patient in the system database. |
| **Actors**                  | - System Database (primary) |
| **Assumptions**             | - Patient has an account. <br> - The patient has just submitted a triage questionnaire. <br> - Patient has an internet connection. |
| **Steps**                   | 1. The provided encrypted questionnaire questions and answers are passed to the system database. <br>  3. The database decrypts the information. 4. A new entry is created in the questionnaire table in the database. <br> 5. The patient username is used as the key and each response to a question is stored in a separate column. | 
| **Non-Functional**  | **Security**: The data provided is sensitive and must be encrypted so that it cannot be intercepted and read. |
| **Issues**                  | - What if the patient does not answer all questions? |

<br>

##### **Table 17**: Store Reccomendations Responses Use Case.

| Use Case                | Store Reccomendations Responses     |
|-------------------------|-------------------------|
| **Description**             | Store any recommendation results to the patient triage questionnaire in the system database. |
| **Actors**                  | - System Database (primary) |
| **Assumptions**             | - The patient has an account. <br> The patient has submitted a triage questionnaire. <br> - Mister Ed system or Medical Professional have submitted recommendations. |
| **Steps**                   | 1. The provided encrypted recommendations are passed to the system database. <br>  3. The database decrypts the information. 4. A new entry is created in the recommendation table in the database. <br> 5. The patient username and questionnaire ID are used as the key and the recommendation and source of recommendation are stored in that entry. | 
| **Non-Functional**  | **Security**: The data provided is sensitive and must be encrypted so that it cannot be intercepted and read. |
| **Issues**                  | - What if the recommendation came from a Medical Professional, should their name be added to the database entry? |

<br>

##### **Table 18**: Calculate ED Wait Time and Capacity Use Case.

| Use Case                | Calculate ED Wait Time and Capacity     |
|-------------------------|-------------------------|
| **Description**             | Calculate an ED's current wait time and capacity percentage from waiting room records. |
| **Actors**                  | - System Database (primary) <br> |
| **Assumptions**             | - System Database waiting room records have been recently updated. |
| **Steps**                   | 1. Pick ED to perform calculations for based off request or timeout. <br> 2. From the ED table get the number of beds in use and the number of total beds to get ED capacity. <br>  3. From the ED table get the number of medical staff currently working and the ED capacity percentage to calculate wait time based on emergency severity. 4. Update ED table capacity percentage and wait time columns. <br> 5. Update timeout timestamp. | 
| **Non-Functional**  | **Efficency**: The time to perform calculations and save data must be less than 5 seconds. <br> **Accuracy**: Displayed estimated wait times must be within 10% of actual wait times. |
| **Issues**                  | - What is the most accurate way to split emergency severity to calculate wait times? |

<br>

##### **Table 19**: Send Call Centre ED Update Use Case.

| Use Case Inclusion       | Calculate ED Wait Time and Capacity *includes* Send Call Centre ED Update    |
|-------------------------|-------------------------|
| **Description**             | Send calculated ED capacity percentage and wait time information to the call centre so they can notify the next patients on the waiting list. |
| **Actors**                  | - System Database (primary) |
| **Assumptions**             | - ED calculations have just been performed and saved in the System Database. |
| **Steps**                   | 1. Database collects ED Name, Capacity Percentage, and Wait Time. <br> 2. The information is encrypted for transmission. <br>  3. The database transmits the information to the Call Centre. | 
| **Non-Functional**  | **Security**: The patient data provided is sensitive and must be encrypted so that it cannot be intercepted and read. |
| **Issues**                  | - What if the call centre does not want constant updates? |




<a name="call-center-use-cases"></a>
## Call Center Use Cases

Figure 5, below, outlines the use cases that may be executed by the Call Center. Tables x-x describe each use case in more detail.


![Use Case Diagram](UCDs/CallCenter_UCD.png)

**Figure 5:** A Use Case Diagram describing the Mister Ed system from the perspective of the Call Center actor.

<br>

##### **Table 20**: ViewQueue Use Case.

| **Use Case**        | View Queue |
|---------------------|---------------------------------------------------------------------------------------------------------------------------|
| **Description**     |  View the queue of patients who have requested notification. |
| **Actors**          | - CallCenterEmployee (primary)
| **Assumptions**     | - CallCenterEmployee is logged in. <br> - CallCenterEmployee has the correct permissions to view the patient queue.|
| **Steps**    | 1. CallCenterEmployee selects the "View Queue" option. <br> 2. The CallCenterEmployee is shown the patient queue.|
| **Non-Functional**  |     **Efficency**: Queue must load and be shown to the CallCenterEmployee in under 3 seconds.                                                         |
| **Issues**          | - What happens if the queue is empty?      |



<br>

##### **Table 21**: ViewPatientInfo Use Case.

| **Use Case**        | ViewPatientInfo|
|---------------------|---------------------------------------------------------------------------------------------------------------------------|
| **Description**     |  View the information page for the currently selected patient. |
| **Actors**          | - CallCenterEmployee (primary)
| **Assumptions**     | - CallCenterEmployee is currently viewing the queue. <br> - CallCenterEmployee has correct permissions to view the patient information page.|
| **Steps**           | 1. CallCenterEmpoloyee selects a patient from the queue. <br> 2. CallCenterEmployee chooses "View Info". <br> 3. CallCenterEmployee is shown the patients' information page. |
| **Non-Functional**  |    **Traceability**: Must track and log who views the information page for each patient. |


<br>

##### **Table 22**: CallPatient Use Case.

| **Use Case**        | CallPatient|
|---------------------|---------------------------------------------------------------------------------------------------------------------------|
| **Description**     |  Call the patient and inform them that there is a spot in the ED available to them. |
| **Actors**          | - CallCenterEmployee (primary) <br> - Patient
| **Assumptions**     | - CallCenterEmployee is currently viewing the patient information page. <br>- Assume that the Patient answers the call. <br> - Patient hasn't changed their mind about going to the  ED.|
| **Steps**           | 1. CallCenterEmployee clicks on "Call Patient". <br> 2. A call is sent to the Patient. <br> 3. CallCenterEmployee informs the patient that there is a spot available in the ED for them. <br> 4. The patient confirms that they will be going into the ED. |
| **Non-Functional**  |  **Privacy**: Must verify that the person on the phone is the Patient before discussing medical information.                                                      |
| **Issues**          | - What happens if the Patient doesn't pick up?                                                          |



<br>

##### **Table 23**: NotifyED Use Case.

| **Use Case**        | NotifyED|
|---------------------|---------------------------------------------------------------------------------------------------------------------------|
| **Description**     |  Notify the ED that a patient will be coming in. |
| **Actors**          | - CallCenterEmployee (primary)
| **Assumptions**     | - The CallCenterEmployee is currently viewing the Patient information page.  <br>- The patient has been called and confirmed that they will be going into the ED.|
| **Steps**           | 1. CallCenterEmployee clicks the "Notify ED" button. <br> 2. Notification is sent out to the ED that the Patient will be coming in.  |
| **Non-Functional**  |     **Security**: Data is sensitive and must be encrypted and sent over a secure communication network. <br> **Efficiency**: Process is time sensitive and notification must be sent to the ED within 10 seconds.                                         |
| **Issues**          | - How to forward Patient information to the ED?                                                              |
