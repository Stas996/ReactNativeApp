export class OAuthToken {
    constructor(token, refreshToken, expiresIn) {
        this.token = token;
        this.refreshToken = refreshToken;
        this.expires = expiresIn;
    }

    get valid(){
        return this.token && this.refreshToken && this.expires;
    }
}