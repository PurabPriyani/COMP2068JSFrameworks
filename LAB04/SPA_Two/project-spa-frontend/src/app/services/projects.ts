import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = environment.ServerAPI + 'projects';

  constructor(private http: HttpClient) {}

  // GET ALL PROJECTS
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // ADD PROJECT
  addProject(newProject: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newProject);
  }

  // DELETE PROJECT
  deleteProject(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateProject(project: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/${project._id}`, project);
}

}
