/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { ISession } from '../shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({providedIn:'root'})
export class VoterService {

    constructor(private http: HttpClient) {

    }

    // First remove the data from the variable where voter is stored (session) and update the server
    deleteVoter(eventId: number, session: ISession, voterName: { firstName: string }) { 
        session.voters = session.voters.filter(voter => {
            return voter !== voterName.firstName
        })
            // HTTP Request 
        // const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName.firstName}`
        // this.http.delete(url).pipe(catchError(this.handleError('deleteVoter')))
        // .subscribe()
    }

    addVoter(eventId: number, session: ISession, voterName: { firstName: string }) {
        session.voters.push(voterName.firstName)
            // HTTP Request 
        // const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName.firstName}`
        // const options = {headers: new HttpHeaders({'Content-Type' : '/application/json'})}
        // this.http.post(url, {}, options)
        //  .pipe(catchError(this.handleError('addVoter')))
        //  .subscribe()
    }

    userHasVoted(session: ISession, voterName: { firstName: string }): boolean {
        return session.voters.some(voter => 
            voter === voterName.firstName
        )
    }

    //Error Handler
    private handleError<T> (operation = 'operation', result?: T) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (error: any): Observable<T> => {
          console.error(error);
          return of (result as T);
        }
    } 
}