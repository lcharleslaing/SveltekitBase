<script>
	import supabase from '$lib/db';
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';

	let register = false;
	let login;
	let magic;
	let email, password;

	async function signup() {
		try {
			const { user, session, error } = await supabase.auth.signUp({
				email,
				password
			});
			if (error) alert(error.message);
			session; //  = authSession
			console.log(session);
			alert("Confirm your Email and you're all set!");
			goto('/auth/confirm-email');
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	}

	const showForm = () => {
		if (register === false) {
			magic = false;
			login = false;
			register = true;
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
		<button on:click={showForm} class="btn btn-sm btn-info w-48">Register</button>
	</div>
{/if}

{#if register}
	<div class="grid place-items-center mt-12">
		<div class="text-center">
			<div class="text-center">Register Form</div>
			<div class="form">
				<input
					bind:value={email}
					type="email"
					placeholder="Enter your email"
					class="input input-bordered w-full max-w-xs my-1"
				/>
				<input
					bind:value={password}
					type="password"
					placeholder="Enter your password"
					class="input input-bordered w-full max-w-xs my-1"
				/>
			</div>
			<div class="text-center">
				<button on:click={hideAllForms} class="btn btn-sm btn-default my-2 w-24">Cancel</button>
				<button on:click={signup} class="btn btn-sm btn-default my-2 w-24">Register</button>
			</div>
			<div class="text-center text-sm m-2 mt-4">
				<a href="/auth/login">Have an Account?</a>
			</div>
		</div>
	</div>
{/if}

<style>
</style>
