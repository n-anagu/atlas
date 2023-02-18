import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { apiUrl } from '../consts';
import { ApiCountryDetails } from '../model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountryDetails(countryName: string): Observable<ApiCountryDetails[]> {
    return this.http.get<ApiCountryDetails[]>(`${apiUrl}/name/${countryName}`);
  }
}
