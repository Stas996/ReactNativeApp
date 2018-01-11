export class Patient {
    constructor(){

    }

    parseJson(json){
        const patient = new Patient();

        patient.id = json.id;
        patient.firstName = json.firstName;
        patient.lastName = json.lastName;
        patient.phone = json.phone;
        patient.email = json.email;
        patient.branch =  json.branch;
        patient.facility = json.facility;
        patient.active = json.active;
        patient.patientId = json.patientId;
        patient.middleName = json.middleName;
        patient.gender = json.gender;
        patient.dateOfBirth = json.dateOfBirth;
        patient.batteryLevel = json.batteryLevel;
        patient.currentLocation = json.currentLocation;
        patient.lastBP = json.lastBP;
        patient.lastHeartRate = json.lastHeartRate;
        patient.lastOxygenLevel = json.lastOxygenLevel;
        patient.lastWeight = json.lastWeight;
        patient.lastPendantAlert = json.lastPendantAlert;

        return patient;
    }
}