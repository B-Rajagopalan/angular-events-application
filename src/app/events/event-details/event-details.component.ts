import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../index';

@Component({
    templateUrl: './event-details.component.html',
    styles: `.imgStyle { height:100px }
    .container { padding-left:20px; padding-right:20px; }
    a { cursor: pointer !important }`,
})
export class EventDetailsComponent implements OnInit {
    event!: IEvent;
    addMode!: boolean
    filterBy: string ='all'
    sortBy: string = 'votes'

    constructor(private eventService:EventService, private route:ActivatedRoute) {

    }

    ngOnInit() {
        //Listening to resolve data changes
        this.route.data.forEach(data => {
            this.event = data['event'];
            this.addMode = false;
            this.sortBy = 'votes';
            this.filterBy = 'all'
        })
    }

    addSession() {
        this.addMode = true;
    }

    saveSession(session: ISession) {
        const maxId = Math.max.apply(null,this.event.sessions.map(x => x.id));
        session.id = maxId+1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event); // can use saveEvent method after server added
        this.addMode = false;
    }

    cancel() {
        this.addMode = false;
    }
     // need a edit button for event - on progress
}