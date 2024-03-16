import { Injectable, inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, CanActivateFn } from '@angular/router';
import { EventService } from '../shared/event.service';

//canActivate is deprecated, so const canActivate is used instead..

//@Injectable()
// export class EventRouteActivator implements CanActivate {
//     constructor(private eventService:EventService,
//         private router:Router) {

//     }

//     canActivate(route:ActivatedRouteSnapshot) {
//         const eventExists = !!this.eventService.getEvent(+route.params['id'])

//         if(!eventExists) {
//             this.router.navigate(['/404'])
//         }
//         return eventExists;
//         return false; 
//     }
// }

export const canActivate:CanActivateFn = (route: ActivatedRouteSnapshot):boolean => {
    const router = inject(Router);
    const eventService = inject(EventService);
    const eventExists = !!eventService.getEvent(+route.params['id'])

        if(!eventExists) {
            router.navigate(['/404'])
        }
        return eventExists;
}