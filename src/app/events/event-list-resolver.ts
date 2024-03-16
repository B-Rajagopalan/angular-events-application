import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { EventService } from "./shared/event.service";
import { Observable, map } from "rxjs";
import { IEvent } from "./index";

export const resolve:ResolveFn<any> = ():Observable<IEvent[]> => {
    const eventService = inject(EventService);
    return eventService.getEvents().pipe(map(events => events));
}