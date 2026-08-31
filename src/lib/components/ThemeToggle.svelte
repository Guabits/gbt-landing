<script lang="ts">
	import { Moon, Sun } from '@lucide/svelte';
	import { themeState } from '$lib/theme.svelte';
</script>

<button
	type="button"
	onclick={() => themeState.toggle()}
	class="border-base-300 hover:border-base-content/30 hover:bg-base-200 relative grid h-9 w-9 place-items-center rounded-sm border transition-colors"
	aria-label={themeState.current === 'nightbook' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
>
	{#if themeState.current === 'nightbook'}
		<Sun size={16} strokeWidth={1.75} />
	{:else}
		<Moon size={16} strokeWidth={1.75} />
	{/if}
</button>
