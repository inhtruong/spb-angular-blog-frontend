import { Injectable } from '@angular/core';
import { API_URL } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiHttp = API_URL + '/api/v1/users';

  constructor(private http: HttpClient) { };

  /**
   * Retrieves the roles from the API endpoint and returns them as an Observable of Role[].
   *
   * @return {Observable<Role[]>} An Observable containing the list of roles.
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiHttp);
  }
  
  /**
   * Creates a new user by sending a POST request to the API endpoint.
   *
   * @param {User} user - The user object to be created.
   * @return {Observable<string>} An observable that emits the created user object.
   */
  create(user: User): Observable<string> {
    return this.http.post<string>(this.apiHttp, user);
  }

  /**
   * Updates a user by sending a PATCH request to the API endpoint with the given ID and user object.
   *
   * @param {string} id - The ID of the user to update.
   * @param {User} user - The updated user object.
   * @return {Observable<string>} An observable that emits the updated user object.
   */
  update(id: string, user: User): Observable<string> {
    return this.http.patch<string>(`${this.apiHttp}/${id}`, user);
  }
  
}
