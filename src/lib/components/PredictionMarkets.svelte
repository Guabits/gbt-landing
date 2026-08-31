<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { predictionMarkets } from '$lib/data/markets';
</script>

<section id="prediccion" class="border-base-300 border-t">
	<div class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
		<div class="flex flex-wrap items-end justify-between gap-4">
			<div class="max-w-lg">
				<h2 class="font-display text-3xl font-semibold tracking-tight sm:text-4xl">El mismo margen también opera eventos</h2>
				<p class="text-base-content/70 mt-4 leading-relaxed">
					Los mercados de predicción usan el colateral de tu cuenta como cualquier otra posición. Compra "Sí" o "No" sobre un resultado y la posición se marca a mercado igual que un perpetuo.
				</p>
			</div>
			<a href="#empezar" class="text-primary inline-flex items-center gap-1.5 text-sm font-medium">
				Ver todos los mercados
				<ArrowRight size={14} strokeWidth={2} />
			</a>
		</div>

		<div class="border-base-300 mt-10 divide-y divide-base-300 border-y">
			{#each predictionMarkets as market (market.question)}
				<div class="grid grid-cols-1 items-center gap-3 py-4 sm:grid-cols-[1fr_auto_auto_auto] sm:gap-6">
					<div>
						<span class="text-base-content/50 text-xs">{market.category}</span>
						<p class="font-display mt-0.5 text-sm font-medium text-balance sm:text-base">{market.question}</p>
					</div>
					<div class="font-mono-num text-base-content/60 text-xs sm:text-right sm:text-sm">
						Vol. {market.volume}
					</div>
					<div class="text-base-content/50 font-mono-num text-xs sm:text-sm">Cierra {market.closes}</div>
					<div class="flex gap-2 sm:justify-end">
						<span class="bg-success/10 text-success font-mono-num rounded-sm px-2.5 py-1 text-xs font-medium">
							Sí {Math.round(market.yesPrice * 100)}¢
						</span>
						<span class="bg-error/10 text-error font-mono-num rounded-sm px-2.5 py-1 text-xs font-medium">
							No {Math.round((1 - market.yesPrice) * 100)}¢
						</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
