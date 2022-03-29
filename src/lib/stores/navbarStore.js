import { writable } from 'svelte/store';

export const themeStyle = writable([
	{ name: 'light', active: true },
	{ name: 'dark', active: false },
	{ name: 'cupcake', active: false },
	{ name: 'bumblebee', active: false },
	{ name: 'emerald', active: false },
	{ name: 'corporate', active: false },
	{ name: 'synthwave', active: false },
	{ name: 'retro', active: false },
	{ name: 'valentine', active: false },
	{ name: 'holloween', active: false },
	{ name: 'garden', active: false },
	{ name: 'forest', active: false },
	{ name: 'aqua', active: false },
	{ name: 'lofi', active: false },
	{ name: 'pastel', active: false },
	{ name: 'wireframe', active: false },
	{ name: 'fantasy', active: false },
	{ name: 'black', active: false },
	{ name: 'luxury', active: false },
	{ name: 'dracula', active: false },
	{ name: 'cmyk', active: false },
	{ name: 'business', active: false },
	{ name: 'acid', active: false },
	{ name: 'lemonade', active: false }
]);
