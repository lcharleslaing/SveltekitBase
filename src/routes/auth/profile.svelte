<script>
	import supabase from '$lib/db';
	import { user } from '$lib/stores/SessionStore';
	const auth_user = supabase.auth.user();
	import Time from 'svelte-time';
	console.log(auth_user);
</script>

<div class="text-center text-4xl card p-4 bg-slate-200 shadow m-2">Profile</div>
{#if auth_user.aud === 'authenticated'}
	<div class="card p-4 m-2 shadow bg-slate-200">
		<div class="text-center text-xl">{auth_user.email}</div>
		<div class="text-center text-xl">{auth_user.phone}</div>
	</div>
	<div class="card p-4 m-2 shadow bg-slate-200">
		<div class="text-center text-md">
			<small class="italic">Last Login: </small><Time
				format="dddd @ h:mm A · MMMM D, YYYY"
				timestamp={auth_user.last_sign_in_at}
			/>
		</div>
		<div class="text-center text-md">
			<small class="italic">Created at: </small><Time
				format="dddd @ h:mm A · MMMM D, YYYY"
				timestamp={auth_user.created_at}
			/>
		</div>
		<div class="text-center text-md">
			<small class="italic">Email Confirmed at: </small><Time
				format="dddd @ h:mm A · MMMM D, YYYY"
				timestamp={auth_user.email_confirmed_at}
			/>
		</div>
	</div>
{:else}
	Not Logged in
{/if}
