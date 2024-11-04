import Papa from "papaparse";

const csvUrl = '/data/hlbc_hospitals.csv';

// Watcher pattern implementation, allows user to watch a hospital and get live updates about its waitlist status
class WaitlistStore {
    constructor() {
        this.position = null;
        this.listeners = new Set();
        this.hospitalsDict = {};
        this.initialized = false;
        this.loadHospitalsData();
    }

    loadHospitalsData() {
        return new Promise((resolve, reject) => {
            Papa.parse(csvUrl, {
                download: true,
                header: true,
                complete: (result) => {
                    // Create dictionary with hospital name as key
                    result.data.forEach(hospital => {
                        if (hospital.SV_NAME) {  // Ensure hospital has a name
                            this.hospitalsDict[hospital.SV_NAME] = {
                                ...hospital,
                                currentWaitlist: Math.floor(Math.random() * 40) + 1, //Select random number
                                estimatedWaitTime: "4:00"
                            };
                        }
                    });
                    this.initialized = true;
                    this.notifyListeners();
                    resolve(this.hospitalsDict);
                },
                error: (error) => {
                    reject(error);
                }
            });
        });
    }

    // Get all hospitals data
    getHospitals() {
        return Object.values(this.hospitalsDict);
    }

    // Get specific hospital data
    getHospital(hospitalName) {
        return this.hospitalsDict[hospitalName];
    }

    // Update waitlist for a specific hospital
    updateHospitalWaitlist(hospitalName, waitlistCount, estimatedTime) {
        if (this.hospitalsDict[hospitalName]) {
            this.hospitalsDict[hospitalName].currentWaitlist = waitlistCount;
            this.hospitalsDict[hospitalName].estimatedWaitTime = estimatedTime;
            this.notifyListeners();
        }
    }

    setPosition(newPosition) {
        this.position = newPosition;
        this.notifyListeners();
    }

    getPosition() {
        return this.position;
    }

    subscribe(listener) {
        this.listeners.add(listener);
        // Return current state if store is initialized
        if (this.initialized) {
            listener({
                position: this.position,
                hospitals: this.getHospitals()
            });
        }
        return () => this.listeners.delete(listener);
    }

    notifyListeners() {
        this.listeners.forEach(listener =>
            listener({
                position: this.position,
                hospitals: this.getHospitals()
            })
        );
    }

    // Wait for initialization to complete
    async waitForInitialization() {
        if (this.initialized) return Promise.resolve();
        return new Promise(resolve => {
            const checkInitialized = () => {
                if (this.initialized) {
                    resolve();
                } else {
                    setTimeout(checkInitialized, 100);
                }
            };
            checkInitialized();
        });
    }
}

export const waitlistStore = new WaitlistStore();