import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { EventService } from "./shared/event.service";
import { IEvent } from "./index";

export const resolveEvent:ResolveFn<any> = (route: ActivatedRouteSnapshot):IEvent => {
    const eventService = inject(EventService);
    return eventService.getEvent(+route.params['id']);
}