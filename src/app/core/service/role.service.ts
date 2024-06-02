import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../config/config';
import { Observable } from 'rxjs';
import { Role } from '../interface/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiHttp = API_URL + '/api/v1/roles';

  constructor(private http: HttpClient) { };

  /**
   * Retrieves the roles from the API endpoint and returns them as an Observable of Role[].
   *
   * @return {Observable<Role[]>} An Observable containing the list of roles.
   */
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiHttp);
  }
}
