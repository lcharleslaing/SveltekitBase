<script context="module">
	import Title from '$lib/components/Title.svelte';
	import './support';

	let myModal = false;
</script>

<svelte:head>
	<script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
</svelte:head>
<!-- The button to open modal -->

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle" />

<div class="modal">
	<div class="modal-box rounded-xl max-w-sm mb-48">
		<h3 class="font-bold text-lg my-auto text-center">Your Support Means the World!</h3>
		<p
			class="hover:bg-green-600 grid place-items-center btn btn-lg rounded-full bg-red-400 border-none my-2 shadow-md"
		>
			<a target="_blank" href="https://www.patreon.com/bePatron?u=69684834" class="p-6"
				>Become a Patron!</a
			>
		</p>
		<div class="modal-actionbg-red-400">
			<label for="my-modal" class="btn btn-sm rounded-full">Close</label>
		</div>
	</div>
</div>

<div class="grid place-content-center">
	<Title name="Support US" _class="" id="" />

	<div>
		<div
			class="-z-10 grid my-6 max-w-lg p-6 card bg-green-100 font-bold text-center mx-auto shadow-md"
		>
			Thanks you for your consideration in Supporting Us!
		</div>
		<div class="grid gap-4 px-12 pt-0 pb-4 text-justify">
			<p>
				Your support, if possible, is very important to getting our dream off the ground and up and
				running and as successful as possible!
			</p>
			<p>
				IAMBIG2TINY's story is pretty simple. We were created out of the desires of Lee, the owner
				and creator, to have at his fingertips, a set of resources that could help him get into a
				better place in life.
			</p>
			<p>
				Life for Lee, as with many others, was that of struggle for many reasons, but never the
				less, had him residing in a place where he could not afford the expensive things in life.
				Especially, the luxury of affording the apps that would help to be able to give him
				advantages that others had that could afford these resources.
			</p>
			<p>
				Today's world is an ever changing place, stressful and expensive place to live. But what
				other choices do we have. When technology arrives and makes our life more functional, we
				jump on board. Doing that over and over for each new piece of the tech world can get
				expensive. We know that today's world has moved to a more subscription based approach when
				it comes to bringing the internet of things into our hands, and that can get expensive!
			</p>
			<p>
				IAMBIG2TINY is constantly looking for ways to make the world a better place, and we are
				committed to creating a site full of apps that will help people do and be what they dream of
				being.
			</p>
			<p>
				As we all know, each and every app subscription, although low at signup, can become very
				expensive when you add all of your subscriptions together and at the end of the month can
				take more of you money than you think.
			</p>
			<p>
				This is what will make us different than most other web/app services companies. We will be
				focusing on keeping our subscription prices low, and we will be offering a variety of apps
				that will help you get the most out of your life, without breaking the bank.
			</p>
			<p>
				Currently, there is no subscription model for IAMBIG2TINY, but we, at somepoint, will need
				to have one in order to keep our doors open and to produce the best & most useful apps for
				you. Currently, for the first 1000 subscribers, we will be offering a free subscription for
				the first year. After that, we will be offering a subscription model that will allow you to
				choose the between multiple plans that will remain low cost for the value that you will get
				and those may include, but not limited to the following:
			</p>
			<ul>
				<li class="my-4">
					<strong class="bg-green-600 text-white p-1 rounded-lg">Free</strong> (First 1000) - For the
					first year
				</li>
				<li class="my-4">
					<strong class="bg-green-600 text-white p-1 rounded-lg">Free</strong> - After the first year
					to include all of our basic apps to get you started.
				</li>
				<li class="my-4">
					<strong class="bg-green-600 text-white p-1 rounded-lg">Basic</strong> - To include a preset
					number of apps that will provide you with the most basic functionality. This will be a good
					starting point and introduce you to our products.
				</li>
				<li class="my-4">
					<strong class="bg-green-600 text-white p-1 rounded-lg">Premium</strong> - To include a much
					larger preset number of apps (middle of the road) that will provide you with a larger set of
					functionality in your chosen apps.
				</li>
				<li class="my-4">
					<strong class="bg-green-600 text-white p-1 rounded-lg">Ultimate</strong> - To include all our
					apps. This will be the most complete package of apps that you will ever need. Also, if we do
					the job we aim to do, you may never need another app or service than IAMBIG2TINY.
				</li>
			</ul>
			<p>
				The Goal is to keep the cost down enough that you will definitely save money every year.
			</p>
			<p>
				Most other tech companies offer a super fancy app with all the bells and whistles and at no
				cost, but there's a catch...there always is! There is always a cost to everything. The cost
				for the consumer of these apps is your personal information. If we really knew what we are
				giving up in data, we would be utterly shocked at the invasion of privacy, each and everyone
				of us is assaulted by on a regular bases.
			</p>
			<p>
				Our goal is NO ADVERTISING, NO PROMOTIONAL MATERIALS, NO SPAM, NO BS, and we will not be
				tracking you, collecting your data, or selling your data. The world we want you to live
				within while you are with us, is one of no distractions by any means other than the designed
				use of our apps. I am not saying that we will always be free of advistising, as in the free
				tiers, but the goal, if needed, and only if needed, is to advertise in a non-intrusive way.
			</p>
			<label for="my-modal" class="text-center btn btn-lg btn-success">Donate</label>
		</div>
	</div>
</div>

<style>
</style>
