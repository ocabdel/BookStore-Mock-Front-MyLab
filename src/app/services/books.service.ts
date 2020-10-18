import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBooks } from '../domains/ibooks';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url: string = environment.URL;

  constructor(private http: HttpClient) {}  // Constructor Injector

  public getAllCustomers(): Observable<IBooks[]> {

    return this.http.get<IBooks[]>(this.url);

   }

   public getCustomersByNameContaining(part: string) : Observable<IBooks[]> {

    const myparams = new HttpParams().set('namePart', part);
    const myheaders = new HttpHeaders().set('accept', 'application/json'); //Not necessary for our App
    const options = {params : myparams, headers : myheaders};

    return this.http.get<IBooks[]>(this.url, options); // Retourne ceci -> customers?namePart=AZERT

   }
}
