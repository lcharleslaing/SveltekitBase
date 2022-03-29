import { writable, readable } from 'svelte/store';

export const valueStore = readable('This is what you are reading', (set) => {
	set('Default Value');
	return () => {};
});
