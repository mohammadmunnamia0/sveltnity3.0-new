<script>
	import { features } from './Features.js';
</script>

<section class="py-16 text-center bg-white">
	<div class="flex justify-center mb-6">
		<span
			class="inline-flex items-center gap-2 py-1 px-4 border border-gray-300 rounded-full text-xl lg:text-md text-gray-600"
		>
		<img src="Features/1.png" alt="" class="w-6 h-6 filter grayscale brightness-75" />

			Features
		</span>
	</div>

	<h2 class="text-4xl lg:text-5xl font-bold mb-12 text-center">
		Why Diallead's AI
		<br class="block lg:hidden" />
		<span class="hidden lg:inline"> </span>
		Voice Assistants?
	</h2>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
		{#each features as { icon, title, description }}
			<div class="p-6 rounded-2xl bg-white text-left shadow-sm hover:shadow-md transition">
				<img src={icon} alt={title} class="w-9 h-9 mb-4" />
				<h3 class="text-[22px] lg:text-[26px] font-semibold mb-2">{title}</h3>
				<p class="text-[18px] text-gray-600 text-sm">{description}</p>
			</div>
		{/each}
	</div>
</section>
