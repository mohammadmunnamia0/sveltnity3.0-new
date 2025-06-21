<script>
	import Icon from '@iconify/svelte';
	let showModal = false;
	const handleModalClose = () => {
		showModal = false;
	};
</script>

<main>
	<section class="relative mx-auto px-1 sm:px-6 lg:px-8">
		<img
			src="/Hero/Banner.png"
			alt="Hero Banner"
			class="lg:w-full h-60 lg:h-full rounded-tr-xl rounded-tl-xl  object-cover object-left w-full"
		/>

		<div class="absolute inset-0 flex justify-center items-center">
			<button
				on:click={() => (showModal = true)}
				class="bg-white/20 backdrop-blur-md p-4 border border-violet-700 rounded-full hover:bg-white/30 transition"
			>
				<Icon icon="mdi:play" class="text-violet-700" width="40px" height="40px" />
			</button>
		</div>
	</section>

	{#if showModal}
		<div class="fixed inset-0 bg-black/70 flex items-center justify-center lg:z-50 p-4">
			<div class="relative w-full max-w-3xl aspect-video">
				<iframe
					class="w-full h-full rounded-xl"
					src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>

				<button
					class="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 shadow-md hover:bg-red-500 hover:text-white transition"
					on:click={handleModalClose}
				>
					<Icon icon="mdi:cross" />
				</button>
			</div>
		</div>
	{/if}
</main>
