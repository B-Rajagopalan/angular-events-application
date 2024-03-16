import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { 
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  checkDirtyState
} from './events/index';

import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';

@NgModule({
  imports: [
    BrowserModule, //core angular services
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ], //imports
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent
  ], //components,pipes and directives
  providers: [ {provide:'canDeactivateCreateEvent', useValue:checkDirtyState}, EventService, ToastrService, ], //services
  bootstrap: [EventsAppComponent], //main component
  schemas: [NO_ERRORS_SCHEMA] //means we can use any name for a tag in html. Ex : <onlineurl> </onlineurl>
})
export class AppModule { }

