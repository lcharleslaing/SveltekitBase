import { writable } from 'svelte/store';

export const appNotifications = writable(0);
export const devNotifications = writable(0);
export const userNotifications = writable(0);

export const notifications = writable(0);
