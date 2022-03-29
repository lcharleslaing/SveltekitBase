<script context="module">
	import supabase from '$lib/db';
	import { page, session } from '$app/stores';
	import { browser } from '$app/env';
	import { user } from '$lib/stores/SessionStore';
	import {
		AppStore,
		AuthStore,
		PlannedStore,
		DevelopmentStore,
		MainStore
	} from '$lib/stores/routesStore';
	import '../app.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Footer from '$lib/components/navbar/Footer.svelte';
	import Register from './auth/register.svelte';
	import Login from './auth/login.svelte';
	import Magic from './auth/magic.svelte';

	const modules = import.meta.glob('./**.svelte');
	let routeClean;
	let nameClean;

	// Capitolize
	function capitalize(value) {
		return value.replace(/(?:^|\s|-)\S/g, (x) => x.toUpperCase());
	}

	// Add routes to RouteStore
	let main = [
		{ name: 'home', route: '/' },
		{ name: 'support-us', route: '/support-our-cause' },
		{ name: 'about', route: '/about' },
		{ name: 'contact', route: '/contact' }
	];
	let apps = [];
	let auth = [];
	let planned = [];
	let development = [];
	let rejects = ['components', '__layout', 'confirm-email'];

	const saveToStores = (menu) => {
		menu === apps
			? AppStore.set(menu)
			: menu === auth
			? AuthStore.set(menu)
			: menu === planned
			? PlannedStore.set(menu)
			: menu === development
			? DevelopmentStore.set(menu)
			: menu === main
			? MainStore.set(menu)
			: undefined;
	};

	const createRoutes = (str, folder, rejects) => {
		for (let path in modules) {
			let namePath = path.replace('.svelte', '').replace('./', '').replace('/index', '');
			let routePath = path.replace('.svelte', '').replace('./', '/').replace('/index', '');
			nameClean = namePath.includes('/') ? namePath.replace(`${str}/`, '') : namePath;
			routeClean = routePath;

			let name = nameClean;
			let route = routeClean;

			if (
				route.includes(str) &&
				!route.includes(rejects[0]) &&
				!route.includes(rejects[1]) &&
				!route.includes(rejects[2])
			) {
				folder.push({ name, route });
			}
		}
	};
	createRoutes('apps', apps, rejects);
	saveToStores(apps);
	createRoutes('auth', auth, rejects);
	saveToStores(auth);
	createRoutes('planned', planned, rejects);
	saveToStores(planned);
	createRoutes('development', development, rejects);
	saveToStores(development);
	saveToStores(main);
</script>

<script>
	// $: console.log('AppsStore: ', $AppStore);
	// $: console.log('AuthStore: ', $AuthStore);
	// $: console.log('PlannedStore: ', $PlannedStore);
	// $: console.log('DevelopmentStore: ', $DevelopmentStore);
	// $: console.log('MainStore: ', $MainStore);
	// $: console.log($session);

	// @ts-ignore
	user.set(supabase.auth.user());
	// if (browser) {
	// $session = supabase.auth.session();
	supabase.auth.onAuthStateChange((_, authSession) => {
		$session = authSession;
		// @ts-ignore
		user.set(session.user);
		// user.set($session);
	});
	// }

	// $: console.log($user);
</script>

<head>
	<title>IAMBIG2TINY</title>
</head>

<Navbar />
<div class="">
	{#if $user}
		<main class="grid place-content-center">
			<slot />
			<Footer />
		</main>
	{:else if !$user}
		<main class="grid place-content-center">
			<img width="150px" src="/icons/big2tiny-logo.svg" alt="" class="m-auto mt-4" />
			<Register />
			<Magic />
			<Login />
			<Footer />
		</main>
	{/if}
</div>
