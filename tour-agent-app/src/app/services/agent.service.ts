import { Injectable } from '@angular/core';
import {Agency} from '../classes/agency';
import * as Constants from '../classes/constants';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' } )
};

@Injectable()
export class AgentService {

  constructor(private http: HttpClient) { }

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
    let params: string = "?" + "agencyName="+agency.agencyName +
      "&" + "streetAddress="+agency.streetAddress +
      "&" + "city="+agency.city +
      "&" + "state="+agency.state +
      "&" + "zip="+agency.zip +
      "&" + "mainPhoneNumber="+agency.mainPhoneNumber +
      "&" + "websiteUrl="+agency.websiteUrl +
      "&" + "adminName="+agency.adminName +
      "&" + "adminEmail="+agency.adminEmail +
      "&" + "adminPhoneNumber="+agency.adminPhoneNumber;

    return this.http.post<Agency>(Constants.API_URL + "/registerAgency" + params, agency, httpOptions)
      .pipe(
        tap(_ => this.log(`added agency with name=${agency.agencyName}`)),
        catchError(this.handleError<Agency>(`registerAgency`))
      );
  }

  private log(message: string) {
    //this.messageService.add('HeroService: ' + message);
    console.log('AgencyService: ' + message);
  }

  private handleError<T> (operation = 'operation',
                          result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: $(error.message}`);
      return of(result as T);
    };
  }

}
