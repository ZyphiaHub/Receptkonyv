import adapter from '@sveltejs/adapter-static';


const config = {
	kit: {
		adapter: adapter({
		  // optional configuration for GitHub Pages
		  fallback: '200.html'
		}),
		paths: {
		  base: '/Receptkonyv'
		}
	  }
};

export default config;
