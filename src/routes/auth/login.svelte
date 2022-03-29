<script>
	import { user } from '$lib/stores/SessionStore';
	import supabase from '$lib/db';
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';

	// user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		// @ts-ignore
		return user.set(session.user);
	});

	let magic;
	let login = false;
	let register;
	let loading = false;
	let email, password;

	async function signin() {
		try {
			const {
				user,
				session: authSession,
				error
			} = await supabase.auth.signIn({
				email,
				password
			});
			if (error) alert(error.message);
			$session = authSession;
			await goto('/auth/profile');
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	}

	const showForm = () => {
		if (login === false) {
			magic = false;
			login = true;
			register = false;
			const logout = false;
		}
	};
	const hideAllForms = () => {
		magic = false;
		login = false;
		register = false;
		const logout = false;
	};
</script>

{#if !magic && !login && !register}
	<div class="grid place-content-center my-6">
		<button on:click={showForm} class="btn btn-sm btn-success w-48">Login</button>
	</div>
{/if}

{#if login}
	<div class="grid place-items-center mt-6">
		<div class="">
			<div class="text-center">Login Form</div>
			<div class="text-center">
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
				<button on:click={signin} class="btn btn-sm btn-default my-2 w-24">Login</button>
			</div>
			<div class="text-center text-sm m-2 mt-4">
				<a href="/auth/register">Need to Register?</a>
			</div>
		</div>
	</div>
{/if}

<style>
</style>
