import { sveltekit } from '@sveltejs/kit/vite'

const config = {
	server: {
		port: process.env.PORT || 5000
	},
	plugins: [sveltekit()]
}

export default config
