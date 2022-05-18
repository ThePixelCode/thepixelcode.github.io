import { Component, OnInit } from '@angular/core';
import { Link } from '../nav-bar/nav-bar.component'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  footerList: Link[]=[
    {linkTitle: 'Home', linkTo: 'main-page'},
    {linkTitle: 'FAQs', linkTo: 'faq'},
    {linkTitle: 'Contact us', linkTo: 'contact'}
  ]

}
