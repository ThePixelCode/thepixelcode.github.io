import { Card } from "./cards";
import type { Project, ProjectLanguajes } from "./project";

export class ProjectsManager {
    private projects: Map<string, Project>;
    private cards: Map<ProjectLanguajes, Card>;

    constructor() {
        this.projects = new Map()
        this.cards = new Map()
    }

    public addProject(project: Project) {
        let language = project.language
        if (this.cards.has(language)) {
            (this.cards.get(language) as Card).count += 1
        } else {
            this.cards.set(language, new Card(language));
            (this.cards.get(language) as Card).count += 1
        }
        this.projects.set(project.link, project)
    }

    public getCardList(): Card[] {
        let cards: Card[] = []
        this.cards.forEach((card)=>{
            cards.push(card)
        })
        return cards
    }

    public getProjectsByLanguage(language: ProjectLanguajes): Project[] {
        let projects: Project[] = []
        this.projects.forEach((project)=>{
            if (project.language == language) {
                projects.push(project)
            }
        })
        return projects
    }
}