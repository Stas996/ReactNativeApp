import { Environment } from '../config/environment';
import { OAuthToken } from '../models/oauth-token';
import { UserProfile } from '../models/user-profile';

class AuthService {
    token = null;
    endUser = null;

    login = (credentials) => {
        return fetch(Environment.oauthServerUrl + '/connect/token', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic Y2xpZW50Oks3Z05VM3NkbytPTDB3Tmhxb1ZXaHIzZzZzMXhZdjcyb2wvcGUvVW5vbHM9' 
            },
            body: createAuthParams(credentials)
        })
        .then(response => response.json())
        .then(json => { 
            const token = new OAuthToken(
                json.access_token,
                json.refresh_token,
                json.expires_in);

            this.token = token;
            return token;
        })
        .then(token => {
            return token.valid
            ? this.getUserProfile(token)
            : null;
        });
    }

    getUserProfile = (token) => {
        const headers = { Authorization : `Bearer ${token}` };

        return fetch(Environment.oauthServerUrl + '/api/users/current', {
            method: "GET",
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(json => {
            const profile = new UserProfile().parseJson(json);
            this.profile = profile;
            return profile;
        });
    }
}

let createAuthParams = function (credentials) {
    const params = {
        username: credentials['username'],
        password: credentials['password'],
        client_id: Environment.clientId,
        grant_type: 'password'
    };
    
    let paramsArr = []; 
    for (let property in params) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(params[property]);
        paramsArr.push(encodedKey + '=' + encodedValue);
    }
    const paramsStr = paramsArr.join('&');

    return paramsStr;
}

export const authService = new AuthService();