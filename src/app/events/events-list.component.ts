import { Component, Inject, OnInit } from '@angular/core';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './index';

@Component({
  selector:'events-list',
    template: `<div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail (click)="handleClick(event)" [event]="event"></event-thumbnail>
      </div>
    </div>
    </div>
    `
}) 

export class EventsListComponent implements OnInit {
  events!:IEvent[] 
  //'!' is a definite assignment (ensuring to ts that this will be definitely initialized with some data)

  // For this toastr variable, inject the TOASTR_TOKEN that provides app module's global toastr object
  constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr, private route:ActivatedRoute) {

  }

  ngOnInit() {
    // Accessing resolve data
    this.events = this.route.snapshot.data['events'];
  }

  //This method not works because priority is given to routerlink (check EventThumbnail Component)
  handleClick(event: any) {
    this.toastr.success(event.name);
  }
} 