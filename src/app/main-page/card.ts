export class Card {
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