import { Component, OnInit } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  cardList:Card[]=[
    new Card('Angular', 'My Angular Projects', '/angular', true),
    new Card('Java', 'My Java Projects', '/java', false),
    new Card('Python', 'My Python Projects', '/python', false),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
