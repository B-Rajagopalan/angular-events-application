import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../index';

@Component({
    templateUrl: './event-details.component.html',
    styles: `.imgStyle { height:100px }
    .container { padding-left:20px; padding-right:20px; }`,
})

export class EventDetailsComponent implements OnInit {
    event!:IEvent;

    constructor(private eventService:EventService, private route:ActivatedRoute) {

     }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
     }

     // need a edit button for event - on progress
}