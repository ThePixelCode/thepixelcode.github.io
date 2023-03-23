import adapter from 'svelte-adapter-github';
import { vitePreprocess } from '@sveltejs/kit/vite';

//const dev = process.argv.includes("dev")

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: "docs",
			fallback: "404.html",
            jekyll: false,
            domain: ""
		}),
		paths: {
			base: ''
		}
	}
};

export default config;
