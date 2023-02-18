import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { CountryDetails } from './model';
import { apiUrl } from '../consts';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  constructor(private http: HttpClient) {}

  getCountries(regionId: string): Observable<CountryDetails[]> {
    return this.http.get<CountryDetails[]>(`${apiUrl}/region/${regionId}`);
  }
}
