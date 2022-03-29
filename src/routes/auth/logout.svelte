<script>
	import { user } from '$lib/stores/SessionStore';
	import { goto, beforeNavigate } from '$app/navigation';
	import supabase from '$lib/db';
	import { session } from '$app/stores';
	import { registered } from '$lib/stores/userAuth';
	import { page } from '$app/stores';

	let magic;
	let login;
	let register;
	let logout = false;

	async function signout() {
		try {
			const { error } = await supabase.auth.signOut();
			if (error) console.log(error.message);
			$session = null;
			await goto('/');
		} catch (error) {
			console.log(error.error_description || error.message);
		} finally {
			loading = false;
		}
	}

	const showForm = () => {
		if (logout === false) {
			magic = false;
			login = false;
			register = false;
			logout = true;
		}
	};
	const hideAllForms = () => {
		magic = false;
		login = false;
		register = false;
		logout = false;
	};
</script>

{#if !magic && !login && !register}
	<div class="grid place-content-center my-6">
		<button on:click={showForm} class="btn btn-sm btn-warning w-48">Logout</button>
	</div>
{/if}

{#if $user && logout}
	<div class="grid place-items-center my-6">
		<div class="m-6">Are you sure you want to Logout?</div>
		<div class="">
			<button on:click={hideAllForms} class="btn btn-sm btn-default shadow">Cancel</button>
			<button on:click={signout} class="btn btn-sm btn-default shadow">Yes</button>
		</div>
	</div>
{/if}

<style>
</style>
