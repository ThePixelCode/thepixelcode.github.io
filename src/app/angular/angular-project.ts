export class AngularProject{
    name:string = '';
    desc:string = '';
    githubURL:string = '';

    constructor(name:string, desc:string, githubURL:string){
        this.name = name;
        this.desc = desc;
        this.githubURL = githubURL;
    }
}