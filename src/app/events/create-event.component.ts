import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';
import { ToastrService } from '../common/toastr.service';

@Component({
    templateUrl:'create-event.component.html',
    styles: [` @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
    em { font-family:'Source Code Pro',monospace; font-style:normal; float:right; color:#E05C65; padding-left:10px }
    .error input { background-color:#E3C3C5; }
  `]
})

export class CreateEventComponent {
    newEvent: any
    isDirty:boolean = true;
    mouseoversave!: boolean

    constructor(private router:Router, private eventService: EventService,
        private toastr: ToastrService) {

    }

    saveEvent(formValues: any) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    } 

    checkDirty() {
        return this.isDirty;
    }
}   