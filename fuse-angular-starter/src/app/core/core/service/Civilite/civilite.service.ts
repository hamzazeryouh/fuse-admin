import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../../../app-settings/app-settings';
import { Observable } from 'rxjs';
import { IPagedResult } from '../../models/general/result-model';
import { IFilterOption } from '../../models/general/filter-option.model';
import { Civilite } from '../../models/Civilite/Civilite.model';


@Injectable({
  providedIn: 'root'
})
export class CiviliteService {

  static endPoint = `${AppSettings.API_ENDPOINT}Civilite/`;

  constructor(private http: HttpClient) { }

  /**
   * get all countries
   * @param filterOption the filter option
   */
  GetAsPagedResult(): Observable<IPagedResult<Civilite>> {
    return this.http.get<IPagedResult<Civilite>>(`${CiviliteService.endPoint}`);
  }

  /**
   * get Civilite by id
   * @param id the id of the Civilite
   */
  Get(id: string): Observable<Civilite> {
    return this.http.get<Civilite>(`${CiviliteService.endPoint}/${id}`);
  }

}