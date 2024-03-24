import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService, ISession } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles:['.nav.navbar-nav { font-size : 15px; }',
            '#searchForm { margin-right : 100px; }',
            '@media (max-width : 1200px) { #searchForm {display:none} }',
            'li> a.active{ color:orange}'] 
})

export class NavBarComponent {
    searchTerm: string = ""
    resultSessions:ISession[] = []

    constructor(public auth: AuthService, private eventService: EventService) {

    }

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe(
            (sessions: ISession[]) => {
                this.resultSessions = sessions
            }
        )
    }
}   