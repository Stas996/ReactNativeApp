import { Environment } from '../config/environment';

class AuthService {
    token = '';

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
            this.token = json.access_token;
            return json;
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