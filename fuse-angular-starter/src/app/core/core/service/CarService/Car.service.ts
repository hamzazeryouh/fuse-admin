import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagedResult } from '../../models/general/result-model';
import { IFilterOption } from '../../models/general/filter-option.model';
import { Car } from '../../models/Car/Car.model';
import { AppSettings } from 'app/app-settings/app-settings';



@Injectable({
  providedIn: 'root'
})
export class CarService {

  static endPoint = `${AppSettings.API_ENDPOINT}Cars/`;

  constructor(private http: HttpClient) { }

  /**
   * get all countries
   * @param filterOption the filter option
   */
  GetAsPagedResult(): Observable<IPagedResult<Car>> {
    return this.http.get<IPagedResult<Car>>(`${CarService.endPoint}`);
  }

  /**
   * get Car by id
   * @param id the id of the Car
   */
  Get(id: string): Observable<Car> {
    return this.http.get<Car>(`${CarService.endPoint}/${id}`);
  }

}