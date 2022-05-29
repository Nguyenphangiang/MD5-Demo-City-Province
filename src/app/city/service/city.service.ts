import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../model/city';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<City[]> {
    return this.http.get<City[]>(`${API_URL}/cities`);
  }
  addCity(city): Observable<City> {
    return this.http.post<City>(`${API_URL}/cities`, city);
  }
  getCityById(id): Observable<City> {
    return this.http.get<City>(`${API_URL}/cities/${id}`);
  }
  updateCity(id, city): Observable<City> {
    return this.http.put<City>(`${API_URL}/cities/${id}`, city);
  }
  deleteCity(id): Observable<City> {
    return this.http.delete<City>(`${API_URL}/cities/${id}`);
  }
}
