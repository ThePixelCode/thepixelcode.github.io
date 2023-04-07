import { Project, ProjectLanguajes } from "$lib/project";
import { ProjectsManager } from "$lib/projectsManager";
import type { LayoutLoad } from "./$types";

export const prerender = true
export const ssr = false

export const load: LayoutLoad = () => {
    let projectManager = new ProjectsManager()
    projectManager.addProject(new Project("Line Filter",
        "ThePixelCode/rust-line-filter",
        "A command line utility to filter repeated lines",
        ProjectLanguajes.Rust))
    return {
        cards: projectManager.getCardList(),
        projects: projectManager.getProjectsByLanguage.bind(projectManager)
    }
};