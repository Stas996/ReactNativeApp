import { baseApiService } from './baseApiService';
import { Environment } from '../config/environment';

class PatientService {
    listAll = () => {
        return baseApiService.get(Environment.baseUrl + '/api/patients')
            .then(response => response.json())
            .then(json => json.patients);
    }
}

export const patientService = new PatientService();