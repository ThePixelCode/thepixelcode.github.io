import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mainLinks: Link[] = [{linkTitle: 'Main Page', linkTo: 'main-page'}, {linkTitle: 'Projects List', linkTo: 'projects'}]

}

export class Link {
    public linkTitle:string
    public linkTo:string
    constructor(linkTitle:string, linkTo:string){

        this.linkTitle = linkTitle;

        this.linkTo = linkTo;

    }
}
