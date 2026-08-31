<script lang="ts">
	import { Menu, X } from '@lucide/svelte';
	import Logo from './Logo.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let mobileOpen = $state(false);

	const links = [
		{ href: '#mercados', label: 'Mercados' },
		{ href: '#hyperliquid', label: 'Infraestructura' },
		{ href: '#prediccion', label: 'Predicción' },
		{ href: '#empezar', label: 'Cómo empezar' }
	];
</script>

<header class="border-base-300 bg-base-100/85 sticky top-0 z-50 border-b backdrop-blur">
	<nav class="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
		<a href="/" class="shrink-0">
			<Logo />
		</a>

		<div class="hidden items-center gap-8 md:flex">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class="text-base-content/70 hover:text-base-content text-sm font-medium transition-colors"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<div class="hidden items-center gap-3 md:flex">
			<ThemeToggle />
			<a href="#empezar" class="btn btn-primary btn-sm rounded-sm px-4"> Abrir cuenta </a>
		</div>

		<div class="flex items-center gap-2 md:hidden">
			<ThemeToggle />
			<button
				type="button"
				class="border-base-300 grid h-9 w-9 place-items-center rounded-sm border"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label="Abrir menú"
				aria-expanded={mobileOpen}
			>
				{#if mobileOpen}
					<X size={17} strokeWidth={1.75} />
				{:else}
					<Menu size={17} strokeWidth={1.75} />
				{/if}
			</button>
		</div>
	</nav>

	{#if mobileOpen}
		<div class="border-base-300 border-t px-5 pb-5 md:hidden">
			<div class="flex flex-col gap-1 pt-3">
				{#each links as link (link.href)}
					<a
						href={link.href}
						class="hover:bg-base-200 rounded-sm px-2 py-2.5 text-sm font-medium"
						onclick={() => (mobileOpen = false)}
					>
						{link.label}
					</a>
				{/each}
				<a href="#empezar" class="btn btn-primary mt-2 rounded-sm" onclick={() => (mobileOpen = false)}>
					Abrir cuenta
				</a>
			</div>
		</div>
	{/if}
</header>
