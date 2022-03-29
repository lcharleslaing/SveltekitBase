<script>
	import supabase from '$lib/db';
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	// import { registered } from '$lib/stores/userAuth';

	let email;
	let magic = false;
	let login;
	let register;

	async function signin() {
		try {
			const {
				user,
				session: authSession,
				error
			} = await supabase.auth.signIn({
				email
			});
			if (error) alert(error.message);
			$session = authSession;
			console.log($session);
			await goto('/auth/profile');
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	}

	const showForm = () => {
		if (magic === false) {
			magic = true;
			login = false;
			register = false;
		}
	};

	const hideAllForms = () => {
		magic = false;
		login = false;
		register = false;
	};
</script>

{#if !magic && !login && !register}
	<div class="grid place-content-center my-6">
		<button on:click={showForm} class="btn btn-sm btn-warning w-48">Magic Login</button>
	</div>
{/if}

{#if magic}
	<div class="grid place-items-center mt-6">
		<div class="text text-xl my-2">Magic Form</div>
		<div class="text-center">
			<input
				bind:value={email}
				type="email"
				placeholder="Enter your email"
				class="input input-bordered w-full max-w-xs my-1"
			/>
		</div>
		<span class="text-center">
			<button on:click={hideAllForms} class="btn btn-sm btn-default pt-2 pb-1 my-2 w-24"
				>Cancel</button
			>
			<button on:click={signin} class="btn btn-sm btn-default pt-2 pb-1 my-2 w-24">Magic</button>
		</span>
		<div class="text-center text-sm m-2 mt-4">
			<a href="/">Need to Register?</a>
		</div>
	</div>
{/if}

<style>
</style>
