// stores/user.js
import { writable } from 'svelte/store';
import supabase from '$lib/db';
import { session } from '$app/stores';
import { goto } from '$app/navigation';
import { browser } from '$app/env';

const changeAuthenticationStatus = () => {
	const registered = browser && localStorage.registered;
	const { set, update, subscribe } = writable(registered || false);

	return {
		subscribe,
		loginUpdate: () => set(browser && (localStorage.registered = true)),
		logoutUpdate: () => set(browser && (localStorage.registered = false))
	};
};

export const registered = changeAuthenticationStatus();
