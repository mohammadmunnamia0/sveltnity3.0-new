<!-- Script Imports -->
<script>
	import Features from '../components/homepage/Features/Features.svelte';
	import Hero from '../components/homepage/Hero.svelte';
	import Navbar from '../components/homepage/Navbar.svelte';
	import StatsHighlight from '../components/homepage/StatsHighlight.svelte';

	export let data;
</script>

<!-- Body Main Components -->
<main>
	
		
		<section class=" lg:h-[987px] bg-[url('/Hero/HeroBg.png')] bg-cover bg-center bg-no-repeat mx-3 rounded-xl">
			<Navbar {data.navbar} />
			<Hero {data.hero} />
		</section>

	<StatsHighlight />
	<Features />
</main>

<!-- Style -->
<style lang="postcss">
	@reference "tailwindcss";
	:global(html) {
		background-color: theme(--color-gray-100);
	}
</style>
