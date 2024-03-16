import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  resolve,
  canActivate
} from './events/index';
import { Error404Component } from './errors/404.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';

const routes: Routes = [
  { path:'events', component:EventsListComponent, resolve:{events:resolve} },
  { path:'events/new', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent'] },
  { path:'events/:id', component:EventDetailsComponent, canActivate:[canActivate] },
  { path:'', redirectTo:'/events', pathMatch:'full' },
  { path:'events/session/new', component: CreateSessionComponent},
  { path:'404', component:Error404Component }, 
  {
    path:'user',
    loadChildren: ()=> import('./user/user.module').then(m => m.UserModule) //lazy loading feature modules
  },
  { path:'**', component:Error404Component }, //WildCard route must be at last or else it will not allow lazy loading
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

