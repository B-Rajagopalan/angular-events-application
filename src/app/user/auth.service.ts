import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
    currentUser:IUser | undefined

    constructor(private http: HttpClient) {}

    login(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: {
                firstName: 'Raja',
                lastName: 'Developer'
            },
            password: password
        }
        // HTTP Request
        /*
        let loginInfo = { username: userName, password: password} // use passport for login in server
        let options = {headers: new HttpHeaders({'Content-Type' : '/application/json'})}

        this.http.post<any>('/api/login', loginInfo, options)
         .pipe(tap(data => {
            this.currentUser = <IUser>data['user']
         }))
         .pipe(catchError(err => {
            return of (false);
         }))
         */
    }

    isAuthenticated() {
        return !!this.currentUser
    }

    updateCurrentUser(data: any) {
        this.currentUser!.userName.firstName = data.firstName
        this.currentUser!.userName.lastName = data.lastName
    }

    checkAuthenticationStatus() {
        this.http.get('/api/currentIdentity')
         .pipe(tap(data => {
            if(data instanceof Object) {
                this.currentUser = <IUser>data;
            }
         }))
         .subscribe()
    }

    logout() {
        this.currentUser = undefined;
            // HTTP Request
        // let options = {headers: new HttpHeaders({'Content-Type' : '/application/json'})}
        // return this.http.post('/api/logout', {}, options)
    }
}