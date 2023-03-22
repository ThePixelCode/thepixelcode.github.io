export class card {
    title: string
    desc: string
    link: string
    private count: number

    constructor(title: string, desc: string, link: string, count: number){
        this.title = title
        this.desc = desc
        this.link = link
        if(count < 0) throw new Error("Count cannot be negative");
        this.count = count
    }

    
    public get Count() : string {
        if(this.count == 0) return "Comming Soon..."
        return this.count == 1? "There is 1 project" : `There are ${this.count} projects`
    }
    
}