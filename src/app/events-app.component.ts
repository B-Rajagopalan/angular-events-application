import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  template: `<nav-bar></nav-bar>
            <router-outlet></router-outlet>`,
})
export class EventsAppComponent {
  
  constructor(private auth: AuthService) {
    //this.auth.checkAuthenticationStatus();
  }

  //  '/user/profile' may break if it loads before checkAuthenticationStatus() is completed
  // Need to implement a resolver in ProfileComponent
}
