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

| View ED Load            |                                                                           |
|-------------------------|---------------------------------------------------------------------------|
| Use Case                | Understand the current load of EDs in the user's area                     |
| Description             | View capacity percentages and estimated wait times by emergency severity of nearby EDs. |
| Actors                  | -User (primary) <br> -Emergency Department Database <br> - MisterEd System              |
| Assumptions             | The user has inputted their location into the system so that nearby EDs can be found. <br> The user is logged into the MisterEd system. |
| Steps                   | 1. User selects ED of choice from a list of nearby EDs. <br> 2. System loads waiting room and bed records from the ED database. <br> 3. The system calculates capacity percentage from the number of ED beds currently in use. <br> 4. The System calculates wait times by emergency severity from waiting room records. <br> 5. The system displays calculated data. <br> 6. User views data to make their decision about which ED to go to. |
| Non-Function            | Speed: The time to calculate and display data must be less than 5 seconds from the time the user selects the ED location. <br> Accuracy: Displayed estimated wait times must be within 10% of actual wait times. |
| Issues                  | What is the most accurate way to split emergency severity to calculate wait times? |

