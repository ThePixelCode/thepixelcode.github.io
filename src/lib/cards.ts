import { ProjectLanguajes } from "./project"

export class Card {
    title: string
    desc: string
    link: string
    private _count: number

    constructor(language: ProjectLanguajes){
        switch (language) {
            case ProjectLanguajes.Rust:
                this.title = "Rust projects"
                this.desc = "My rust projects"
                this.link = "/rust"
                break
            case ProjectLanguajes.Typescript:
                this.title = "Typescript projects"
                this.desc = "My typescript projects, including javascript and it's frameworks"
                this.link = "/ts"
                break
        }
        this._count = 0
    }

    
    public getCountAsString() : string {
        if(this._count == 0) return "Comming Soon..."
        return this._count == 1? "There is 1 project" : `There are ${this._count} projects`
    }

    public get count(): number {
        return this._count
    }

    public set count(value: number) {
        if (value >= 0) {
            this._count = value
        } else {
            this._count = 0
        }
    }
    
}