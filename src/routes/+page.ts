// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import { card } from "$lib/cards";
import type { PageLoad } from "./$types"

export const prerender = true;
export const ssr = false
export const load = (()=>{
    return {
        cards: [
            new card("Javascript", "javascript desc", "/projects/javascript", 0),
            new card("Python", "python desc", "/projects/python", 0),
            new card("Java", "java desc", "/projects/java", 0),
            new card("Rust", "rust desc", "/projects/rust", 0),
            new card("Docker", "docker desc", "/projects/docker", 0)
        ]
    }
}) satisfies PageLoad