<script>
	const statImgClass = ' h-5 lg:h-10 filter grayscale opacity-70';
</script>

<div class="flex flex-col items-center py-8 text-center bg-white px-4 sm:px-6 lg:px-8">
	<h2 class="text-[18px] lg:text-[22px] font-bold text-gray-800 mb-12 max-w-3xl">
		Dial Leads
		<span class="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
			Powers 10M+ ROI
		</span>
		-positive Customer Interactions per Month
	</h2>

	<div class="w-full overflow-hidden">
		<div
			class="grid grid-cols-6 justify-items-center items-center gap-4 sm:gap-16 slide-container"
			style="background: linear-gradient(242deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0.08) 100%);"
		>
			<img src="/Stats/1.png" alt="Edistys" class={statImgClass} />
			<img src="/Stats/2.png" alt="Bloomberg" class={statImgClass} />
			<img src="/Stats/3.png" alt="Edistys" class={statImgClass} />
			<img src="/Stats/4.png" alt="Bloomberg" class={statImgClass} />
			<img src="/Stats/5.png" alt="Forbes" class={statImgClass} />
			<img src="/Stats/6.png" alt="GIZMODO" class={statImgClass} />
			
			
		</div>
	</div>
</div>

<style>
	.slide-container {
		animation: slide 15s linear infinite;
	}

	@keyframes slide {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(-100%);
		}
	}

	@media (min-width: 640px) {
		.slide-container {
			animation: none;
		}
	}
</style>
