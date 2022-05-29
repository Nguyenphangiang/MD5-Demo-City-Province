import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Province} from '../model/province';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  constructor(private http: HttpClient) { }
  getAllProvince(): Observable<Province[]> {
   return this.http.get<Province[]>(`${API_URL}/cities/province`);
  }
}

