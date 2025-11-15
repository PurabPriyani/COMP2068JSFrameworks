import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) { }

    // method to call all the projects from backend
    getProjects(){
    return this.http.get('http://localhost:3000/api/projects');
    }
 
}
