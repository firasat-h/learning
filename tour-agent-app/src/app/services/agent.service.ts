import { Injectable } from '@angular/core';
import {Agency} from '../classes/agency';
import * as Constants from '../classes/constants';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import {AbstractBaseService} from './abstract-base.service';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'} )
};

@Injectable()
export class AgentService extends AbstractBaseService {

  constructor(private http: HttpClient) {
    super();
  }

  /*
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }
*/


  registerAgency(agency: Agency): Observable<Agency> {
    const params: string = "?" + "agencyName="+agency.agencyName +
      "&" + "streetAddress="+agency.streetAddress +
      "&" + "city="+agency.city +
      "&" + "state="+agency.state +
      "&" + "zip="+agency.zip +
      "&" + "mainPhoneNumber="+agency.mainPhoneNumber +
      "&" + "websiteUrl="+agency.websiteUrl +
      "&" + "adminName="+agency.adminName +
      "&" + "adminEmail="+agency.adminEmail +
      "&" + "adminPhoneNumber="+agency.adminPhoneNumber;

    /*
    const params = new HttpParams();
    params.set('agencyName', agency.agencyName.trim());
    params.set('streetAddress', agency.streetAddress.trim());
    params.set('city', agency.city.trim());
    params.set('state', agency.state.trim());
    params.set('zip', agency.zip.trim());
    params.set('mainPhoneNumber', agency.mainPhoneNumber.trim());
    params.set('websiteUrl', agency.websiteUrl.trim());
    params.set('adminName', agency.adminName.trim());
    params.set('adminEmail', agency.adminEmail.trim());
    params.set('adminPhoneNumber', agency.adminPhoneNumber.trim());
    */

    //this.http.get<Agency>(Constants.API_URL + "", agency, httpOptions).pipe();

    return this.http.post<Agency>(Constants.API_URL + '/registerAgency' + params,
      agency, httpOptions)
      .pipe(
        tap(_ => this.log("AgencyService", `added agency with name=${agency.agencyName}`)),
        catchError(this.handleError<Agency>(`registerAgency`))
      );
  }

  private handleError<T> (operation = 'operation',
                          result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log("AgentService", + `${operation} failed: ` + error.message);
      return of(result as T);
    };
  }

  private handleErrorA(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

}
