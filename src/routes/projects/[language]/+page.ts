import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { ProjectLanguajes } from "$lib/project";

export const load: PageLoad = ({ params }) => {
    switch (params.language) {
        case "rust":
            return {
                language: ProjectLanguajes.Rust
            }
    
        default:
            throw error(404, "Not Found")
    }
};