import { Injectable } from '@angular/core';
import {GpioPin} from "./gpio-pin";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GpioService {
  private gpioApiUrl = 'http://pi41:9095/api/gpio';
  private gpio: GpioPin[] | undefined;

  constructor(private http: HttpClient) { }

  getGpio(): Observable<GpioPin[]> {
    if (this.gpio) {
      return of(this.gpio);
    }
    return this.http.get<GpioPin[]>(this.gpioApiUrl+'/provision/list')
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        tap(data => this.gpio = data),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(() => new Error(errorMessage));
  }

}
