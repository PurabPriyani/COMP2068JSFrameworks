import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.html',
  styleUrls: ['./project.css'],
})
export class Project implements OnInit {

  projects: any;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    console.log("ngOnInit fired");
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe((data) => {
      console.log("Projects loaded:", data);
      this.projects = data;
    });
  }
}
