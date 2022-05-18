import { Component, OnInit } from '@angular/core';

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
    new Card('WordPress', 'My Experiments on  WordPress', '/wp', false),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

class Card {

    title:string = '';

    desc:string = '';

    url:string = '';

    available:boolean = false;



    constructor(title:string, desc:string, url:string, available:boolean){

        this.title = title;

        this.desc = desc;

        this.url = url;

        this.available = available;

    }

}
