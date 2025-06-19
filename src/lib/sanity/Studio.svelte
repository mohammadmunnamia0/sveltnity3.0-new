<script lang="ts">
  import { onMount } from 'svelte';
  import { defineConfig, Studio } from 'sanity';
  import config from '$studio/sanity.config'; // adjust based on your setup

  let studio: typeof Studio;

  onMount(async () => {
    const mod = await import('sanity');
    studio = mod.Studio;
  });
</script>

{#if studio}
  <svelte:component this={studio} config={config} />
{:else}
  <p>Loading Studio...</p>
{/if}
