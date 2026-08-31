<script lang="ts">
	import { tickerItems } from '$lib/data/markets';

	const loop = [...tickerItems, ...tickerItems];
</script>

<div class="border-base-300 bg-base-200/50 relative overflow-hidden border-y py-2.5">
	<div class="ticker-track flex w-max gap-8">
		{#each loop as item, i (i)}
			<div class="flex items-center gap-2 whitespace-nowrap">
				<span class="text-base-content/50 text-[10px] font-medium">
					{item.kind === 'perp' ? 'PERP' : 'SPOT'}
				</span>
				<span class="font-mono-num text-sm font-medium">{item.symbol}</span>
				<span class="font-mono-num text-base-content/80 text-sm">{item.price}</span>
				<span
					class="font-mono-num text-xs"
					class:text-success={item.change >= 0}
					class:text-error={item.change < 0}
				>
					{item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}%
				</span>
			</div>
		{/each}
	</div>
</div>

<style>
	.ticker-track {
		animation: scroll 38s linear infinite;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.ticker-track {
			animation: none;
		}
	}
</style>
