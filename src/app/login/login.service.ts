import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {
    private loggedIn: boolean = false;

    isLoggedIn() {
        return this.loggedIn;
    }

    doLogin(username, password) {
        if (username === 'user' && password === '123456') {
            this.loggedIn = true;
        }
        return this.loggedIn;
    }
}