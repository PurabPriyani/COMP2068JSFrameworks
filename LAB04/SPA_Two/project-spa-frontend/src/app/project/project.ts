import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { ProjectService } from '../services/projects';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [DatePipe],
  templateUrl: './project.html',
  styleUrls: ['./project.css']
})
export class Project implements OnInit {

  projects: any[] = [];

  _id: string = '';
  name: string = '';
  dueDate: string = '';
  course: string = '';

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  // GET ALL PROJECTS
  getProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => this.projects = data,
      error: (err) => console.error(err)
    });
  }

  // ADD NEW PROJECT
  addProject(): void {
    let newProject = {
      name: this.name,
      dueDate: this.dueDate,
      course: this.course
    };

    this.projectService.addProject(newProject).subscribe({
      next: () => {
        this.getProjects();
        this.clearForm();
      },
      error: (err) => console.error(err)
    });
  }

  // SELECT PROJECT FOR EDITING
  selectProject(p: any): void {
    this._id = p._id;
    this.name = p.name;
    this.dueDate = p.dueDate.substring(0, 10);
    this.course = p.course;
  }

  // UPDATE PROJECT
  updateProject(): void {
    let updatedProject = {
      _id: this._id,
      name: this.name,
      dueDate: this.dueDate,
      course: this.course
    };

    this.projectService.updateProject(updatedProject).subscribe({
      next: () => {
        this.getProjects();
        this.clearForm();
      },
      error: (err) => console.error(err)
    });
  }

  // DELETE PROJECT
  deleteProject(id: string): void {
    if (!confirm("Are you sure you want to delete this project?")) return;

    this.projectService.deleteProject(id).subscribe({
      next: () => this.getProjects(),
      error: (err) => console.error(err)
    });
  }

  // CLEAR FORM
  clearForm(): void {
    this._id = '';
    this.name = '';
    this.dueDate = '';
    this.course = '';
  }
}
