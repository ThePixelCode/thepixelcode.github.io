// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import type { PageLoad } from "./$types"

class card {
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

export const prerender = true;
export const ssr = false
export const load = (()=>{
    return {
        cards: [
            new card("Javascript", "javascript desc", "/projects/javascript", 0),
            new card("Python", "python desc", "/projects/python", 2),
            new card("Java", "java desc", "/projects/java", 1),
            new card("Rust", "rust desc", "/projects/rust", 0),
            new card("Docker", "docker desc", "/projects/docker", 0)
        ]
    }
}) satisfies PageLoad