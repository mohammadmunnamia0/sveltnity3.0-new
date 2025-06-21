<script>
	import Icon from '@iconify/svelte';
	import HeroBanner from './HeroBanner.svelte';
	export let hero = {};
</script>

<main
	class=" text-white flex flex-col items-center justify-center pt-18 lg:pt-18 px-4 sm:px-6 lg:px-2"
>
	<section class="w-full max-w-7xl mx-auto">
		<section class="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
			<div
				class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white shadow-md"
				style="border: 1px solid #7130D6; background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.08) 100%);"
			>
				<Icon icon="mdi:check-circle" width="18" height="18" class="text-purple-400" />
				<span class="hidden font-bold sm:block">AI can now make & take calls on your behalf!</span>
				<span class="block font-bold sm:hidden">AI can now make & take calls...</span>
			</div>

			<h1 class="text-5xl sm:text-5xl md:text-6xl font-bold leading-tight text-Geist text-center">
				<span>
					{hero.heading || 'Effortless'}
					<br class="block sm:hidden" />
					<span class="hidden sm:inline"> </span>
					Human-Like
				</span>
				<br />
				<span class="text-violet-700 text-[40px] sm:text-5xl md:text-6xl">{hero.subheading || 'AI Phone Calls'}</span>
			</h1>

			<p class="text-lg text-gray-300">
				{hero.description || 'Boost conversions with AI-powered voice agents and'}<br class="hidden sm:block" />
				{hero.description2 || 'never miss a lead again.'}
			</p>
			<div>
				<div>
					<a href={hero.ctaUrl || '#'}>
						<button
							class="mt-6 lg:mt-2 sm:mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-700 to-violet-400 px-5 rounded-xl text-white text-[18px] font-medium border-2 border-violet-400 hover:opacity-90 transition cursor-pointer"
						>
							<img src="/Icon/Gmail.png" alt="Gmail" width="18" height="18" />
							{hero.ctaText || 'Contact Sales'}
						</button>
					</a>
				</div>
			</div>
		</section>
		<section class="mt-16 sm:mt-28">
			<HeroBanner />
		</section>
	</section>
</main>
