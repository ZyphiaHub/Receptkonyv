import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: '/Receptkonyv/',
	build: {
		outDir: 'docs',
		emptyOutDir: true
	}
});
