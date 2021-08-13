import { Component, OnInit } from '@angular/core';
import { AngularProject } from './angular-project';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  projectList:AngularProject[] = [
    new AngularProject('Misterbug-Page', 'This is a project', 'https://github.com/misterbug5/misterbug5.github.io'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
