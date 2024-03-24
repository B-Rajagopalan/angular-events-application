import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { EventService } from "./shared/event.service";
import { Observable, map } from "rxjs";
import { IEvent } from "./index";

export const resolveEvents:ResolveFn<any> = ():Observable<IEvent[]> => {
    const eventService = inject(EventService);
    return eventService.getEvents()
    // resolver automatically subscribes to the observable call it gets (no need pipe)
}