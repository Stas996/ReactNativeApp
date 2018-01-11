import { authService } from './auth.service';

class BaseApiService {
    get(url, options) {
        return request('GET', url, null, options);
    }

    post(url, body, options) {
        return request('POST', url, body, options);
    }

    put(url, body, options) {
        return request(RequestMethod.Put, url, body, options);
    }

    delete(url, options) {
        return request(RequestMethod.Delete, url, null, options);
    }
}

let request = function (method, url, body, options) {
    const sendRequest = () => {
        const originalRequest = createRequest(method, body);
        return fetch(url, originalRequest);
    };

    return sendRequest();
}

let createRequest = function (method, body) {
    return {
        method: method,
        headers: createDefaultHeaders(),
        body: body
    }
}

let createDefaultHeaders = function () {
    let headers = {};   
    createAuthorizationHeaders(headers);
    createContentTypeHeaders(headers);

    return headers;
}

let createAuthorizationHeaders = function (headers) {
    headers['Authorization'] = `Bearer ${authService.token}`;
}

let createContentTypeHeaders = function (headers) {
    headers['Content-Type'] = 'application/json';
    headers['Accepts'] = 'application/json';
}

let createParams = function (params) {
    let requestParams = []; 
    for (let property in params) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(params[property]);
        requestParams.push(encodedKey + '=' + encodedValue);
    }
    const paramsStr = requestParams.join('&');

    return paramsStr;
}

export const baseApiService = new BaseApiService();