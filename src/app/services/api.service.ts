import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080';
  private username = 'userAdmin'; //por enquanto fixo - funcionalidade de autenticacao em processo de levantamento de requisitos ainda
  private password = 'admin@123'; //por enquanto fixo - funcionalidade de autenticacao em processo de levantamento de requisitos ainda

  constructor(private http: HttpClient) { }

  private createAuthorizationHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${this.username}:${this.password}`)
    });
    return headers;
  }

  //Person
  getPeopleListAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/person/list-all`, {
      headers: this.createAuthorizationHeader()
    });
  }

  savePersonRegister(data: Person): Observable<any> {
    return this.http.post(`${this.baseUrl}/person/save`, data, {
      headers: this.createAuthorizationHeader()
    });
  }

  updatePerson(data: Person): Observable<any> {
    return this.http.put(`${this.baseUrl}/person/save`, data, {
      headers: this.createAuthorizationHeader()
    });
  }

  deletePerson(personId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/person/delete/${personId}`, {
      headers: this.createAuthorizationHeader()
    });
  }

  //Project
  getProjectsListAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/projec/list-all`, {
      headers: this.createAuthorizationHeader()
    });
  }

  //ProjectMember
  getProjectMembersListAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/project-member/list-all`, {
      headers: this.createAuthorizationHeader()
    });
  }

  getProjectMembersListAllByProjectId(projectId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/project-member/list-all-by-project/${projectId}`, {
      headers: this.createAuthorizationHeader()
    });
  }

}