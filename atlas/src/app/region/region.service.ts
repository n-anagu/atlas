import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ApiCountryDetails } from '../model';
import { apiUrl } from '../consts';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  constructor(private http: HttpClient) {}

  getCountries(regionId: string): Observable<ApiCountryDetails[]> {
    return this.http.get<ApiCountryDetails[]>(`${apiUrl}/region/${regionId}`);
  }
}
