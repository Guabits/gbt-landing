<script lang="ts">
	import { ArrowRight, Zap } from '@lucide/svelte';
	import CandleChart from './CandleChart.svelte';
</script>

<section class="mx-auto max-w-6xl px-5 pt-14 pb-10 sm:px-8 sm:pt-20 sm:pb-16">
	<div class="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
		<div>
			<div class="border-base-300 text-base-content/70 mb-6 inline-flex items-center gap-2 rounded-sm border px-2.5 py-1 text-xs">
				<Zap size={12} strokeWidth={2} class="text-secondary" />
				Construido sobre Hyperliquid L1
			</div>

			<h1 class="font-display text-balance text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-[3.4rem]">
				Un solo libro de órdenes para spot, perpetuos y mercados de predicción.
			</h1>

			<p class="text-base-content/70 mt-5 max-w-md text-base leading-relaxed sm:text-lg">
				Guabits Markets lleva la velocidad de ejecución on-chain de Hyperliquid a tres clases de activos a la vez, con la misma cuenta, el mismo colateral y la misma latencia de milisegundos.
			</p>

			<div class="mt-8 flex flex-wrap items-center gap-3">
				<a href="#empezar" class="btn btn-primary rounded-sm px-5">
					Empezar a operar
					<ArrowRight size={16} strokeWidth={2} />
				</a>
				<a href="#mercados" class="btn btn-ghost border-base-300 rounded-sm border px-5"> Ver mercados </a>
			</div>

			<dl class="border-base-300 mt-10 grid grid-cols-3 gap-6 border-t pt-6">
				<div>
					<dt class="text-base-content/55 text-xs">Volumen 24h</dt>
					<dd class="font-mono-num mt-1 text-lg font-medium sm:text-xl">$3.84B</dd>
				</div>
				<div>
					<dt class="text-base-content/55 text-xs">Latencia media</dt>
					<dd class="font-mono-num mt-1 text-lg font-medium sm:text-xl">~120ms</dd>
				</div>
				<div>
					<dt class="text-base-content/55 text-xs">Mercados activos</dt>
					<dd class="font-mono-num mt-1 text-lg font-medium sm:text-xl">210+</dd>
				</div>
			</dl>
		</div>

		<div class="border-base-300 bg-base-200/40 rounded-md border p-4 sm:p-6">
			<div class="mb-4 flex items-center justify-between">
				<div>
					<p class="text-base-content/50 text-xs">BTC/USD · Perpetuo</p>
					<p class="font-display text-sm font-medium">Bitcoin</p>
				</div>
				<div class="text-base-content/50 flex gap-3 text-xs">
					<span class="text-base-content">1H</span>
					<span>4H</span>
					<span>1D</span>
				</div>
			</div>
			<CandleChart />
		</div>
	</div>
</section>
