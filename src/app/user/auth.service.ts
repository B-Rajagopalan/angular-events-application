import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({providedIn: 'root'})
export class AuthService {
    currentUser!:IUser
    login(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: {
                firstName: 'Raja',
                lastName: 'Developer'
            },
            password: password
        }
    }

    isAuthenticated() {
        return !!this.currentUser
    }

    updateCurrentUser(data: any) {
        this.currentUser.userName.firstName = data.firstName
        this.currentUser.userName.lastName = data.lastName
    }
} 