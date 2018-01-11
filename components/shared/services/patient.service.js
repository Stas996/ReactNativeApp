import { baseApiService } from './base-api.service';
import { Environment } from '../config/environment';
import { Patient } from '../models/patient';

class PatientService {
    listAll = () => {
        return baseApiService.get(Environment.baseUrl + '/api/patients')
            .then(response => response.json())
            .then(json => json.patients.map(p => new Patient().parseJson(p)));
    }
}

export const patientService = new PatientService();