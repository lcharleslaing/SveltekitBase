import { writable } from 'svelte/store';

const appRoutes = [];
export const AppStore = writable(appRoutes);

const authRoutes = [];
export const AuthStore = writable(authRoutes);

const plannedRoutes = [];
export const PlannedStore = writable(plannedRoutes);

const developmentRoutes = [];
export const DevelopmentStore = writable(developmentRoutes);

const mainRoutes = [];
export const MainStore = writable(developmentRoutes);
