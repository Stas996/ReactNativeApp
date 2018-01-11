export class UserProfile {
    id = null;
    username = null;
    firstName = null;
    lastName = null;
    email = null;
    phone = null;
    homePhone = null;
    workPhone = null;
    role = null;
    permissionKeys = null;
    patientId = null;
    patientRelativeId = null;

    parseJson(json){
        const profile = new UserProfile();

        profile.id = json.id;
        profile.username = json.username;
        profile.firstName = json.firstName;
        profile.lastName = json.lastName;
        profile.email = json.email;
        profile.phone = json.phone;
        profile.homePhone = json.homePhone;
        profile.workPhone = json.workPhone;
        profile.role = json.role;
        profile.permissionKeys = json.permissionKeys;
        profile.patientId = json.patientId;
        profile.patientRelativeId = json.patientRelativeId;

        return profile;
    }
}