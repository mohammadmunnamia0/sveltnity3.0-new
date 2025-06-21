<script>
	export let navbar = {};
	let isMenuOpen = false;
	const navLinks = navbar.links || ['Real estate', 'E-commerce', 'Home Service', 'Dentist'];
</script>

<nav class="text-white lg:px-[145px] lg:py-1 mt-2">
	<section class="flex justify-between items-center pt-[20px] px-4">
		<div class="flex items-center space-x-2">
			{#if navbar.logo}
				<img src={navbar.logo.asset ? navbar.logo.asset.url : '/logo.png'} alt="Logo" class="h-6 w-6 text-purple-500" />
			{:else}
				<img src="/logo.png" alt="Logo" class="h-6 w-6 text-purple-500" />
			{/if}
			<span class="text-lg font-semibold">Dialleads</span>
		</div>
		<ul class="hidden md:flex gap-14 text-md font-medium">
			{#each navLinks as link}
				<li class="cursor-pointer text-gray-300 hover:text-purple-400 transition">{link.title ? link.title : link}</li>
			{/each}
		</ul>
		<button
			class="hidden md:inline-block ml-4 bg-gradient-to-r from-purple-600 to-purple-400 px-5 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition"
		>
			Contact us
		</button>
		<!-- Mobile View -->
		<button
			on:click={() => (isMenuOpen = !isMenuOpen)}
			class="md:hidden text-white focus:outline-none"
			aria-label="Toggle navigation menu"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="w-7 h-7"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</section>
	{#if isMenuOpen}
		<section
			class="absolute right-4 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50 p-4 space-y-2"
		>
			{#each navLinks as link}
				<div class="text-gray-700 hover:text-purple-600 transition cursor-pointer">
					{link.title ? link.title : link}
				</div>
			{/each}
			<button
				class="w-full bg-purple-600 text-white py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition"
			>
				Contact us
			</button>
		</section>
	{/if}
</nav>
