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
  checkDirtyState,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  LocationValidator
} from './events/index';

import { NavBarComponent } from './nav/navbar.component';
import { TOASTR_TOKEN as TOKEN_TOASTR, Toastr, JQ_TOKEN, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective} from './common';
import { Error404Component } from './errors/404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// typescript considers window as any object so that it wont try to identify toastr
// since toastr is not an inbuilt library (no definitions available) 
const toastr:Toastr = (window as any).toastr;
const jQuery = (window as any).$;

@NgModule({
  //imports
   //core angular services
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  //components,pipes and directives
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    DurationPipe,
    LocationValidator, // -> Its a Directive
    ModalTriggerDirective
  ], 
  //services
  providers: [ 
    {provide:'canDeactivateCreateEvent', useValue:checkDirtyState}, // longhand syntax for providers
    EventService,
    {
     provide: TOKEN_TOASTR, //create new InjectionToken and provides the toastr global object
     useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    } 
  ],
  bootstrap: [EventsAppComponent], //main component
  schemas: [NO_ERRORS_SCHEMA] //means we can use any name for a tag in html. Ex : <onlineurl> </onlineurl>
})
export class AppModule { }

