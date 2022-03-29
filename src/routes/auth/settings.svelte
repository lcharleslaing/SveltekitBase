<script>
	import Card from '$lib/components/Card.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<Title bgColor="bg-slate-100" textColor="text-slate-900" textSize="2xl" _class="" name="Settings" />

<Card
	bgColor="bg-white"
	textColor="text-slate-900"
	title="Messages"
	_class="text-left px-6"
	cols="1"
>
	<div class="text-center font-bold px-6  btn btn-sm  btn-primary">Create New</div>
	<div class="text-center font-bold px-6 bg-slate-100">New</div>
	<div class="text-center font-bold px-6 bg-slate-100">Previous</div>
</Card>
