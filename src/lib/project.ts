export enum ProjectLanguajes {
    Rust,
    Typescript,
}

export class Project {
    private _name: string;
    private _link: string;
    private _desc: string;
    private _language: ProjectLanguajes;

    constructor(name:string, link: string, desc: string, language: ProjectLanguajes) {
        this._name = name
        this._link = link
        this._desc = desc
        this._language = language
    }

    
    public get name() : string {
        return this._name
    }
    
    public get link(): string {
        return this._link;
    }
    
    public get description(): string {
        return this._desc;
    }
    
    public get language(): ProjectLanguajes {
        return this._language;
    }
}