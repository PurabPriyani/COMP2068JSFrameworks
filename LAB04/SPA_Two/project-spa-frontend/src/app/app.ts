import { Component } from '@angular/core';
import { Project } from './project/project';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Project],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
