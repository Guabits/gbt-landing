<script lang="ts">
	import { ArrowLeftRight, Gauge, GitFork } from '@lucide/svelte';

	const columns = [
		{
			icon: ArrowLeftRight,
			label: 'Spot',
			title: 'Compra y vende activos reales',
			description:
				'Liquidación instantánea con custodia propia. Sin envolturas sintéticas: lo que compras es el activo, y se retira a tu wallet cuando quieras.',
			meta: [
				{ k: 'Pares listados', v: '140+' },
				{ k: 'Comisión maker', v: '0.02%' }
			]
		},
		{
			icon: Gauge,
			label: 'Perpetuos',
			title: 'Apalancamiento hasta 50x',
			description:
				'Libro de órdenes on-chain con financiamiento cada hora. Márgenes cruzados entre todas tus posiciones perpetuas para usar el colateral con eficiencia.',
			meta: [
				{ k: 'Apalancamiento', v: '50x' },
				{ k: 'Comisión maker', v: '0.01%' }
			]
		},
		{
			icon: GitFork,
			label: 'Predicción',
			title: 'Opera el resultado, no solo el precio',
			description:
				'Mercados binarios sobre eventos on-chain, macro y cripto. Cada posición se liquida contra un oráculo verificable, sin intermediario que decida el resultado.',
			meta: [
				{ k: 'Mercados abiertos', v: '60+' },
				{ k: 'Liquidación', v: 'Oráculo on-chain' }
			]
		}
	];
</script>

<section id="mercados" class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
	<div class="max-w-lg">
		<h2 class="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Tres formas de operar, una sola cuenta</h2>
		<p class="text-base-content/70 mt-4 leading-relaxed">
			Mueve colateral entre spot, perpetuos y mercados de predicción sin transferencias ni puentes. Todo corre sobre el mismo motor de emparejamiento.
		</p>
	</div>

	<div class="border-base-300 mt-12 grid divide-base-300 border-t sm:grid-cols-3 sm:divide-x sm:border-l">
		{#each columns as col (col.label)}
			<div class="border-base-300 border-b px-1 py-8 first:pl-0 sm:border-b-0 sm:px-7 sm:py-2">
				<col.icon size={20} strokeWidth={1.6} class="text-primary" />
				<p class="text-base-content/50 mt-5 text-xs font-medium">{col.label}</p>
				<h3 class="font-display mt-1.5 text-lg font-semibold text-balance">{col.title}</h3>
				<p class="text-base-content/70 mt-3 text-sm leading-relaxed">{col.description}</p>

				<dl class="border-base-300 mt-6 space-y-2 border-t pt-4">
					{#each col.meta as m (m.k)}
						<div class="flex items-center justify-between text-sm">
							<dt class="text-base-content/55">{m.k}</dt>
							<dd class="font-mono-num font-medium">{m.v}</dd>
						</div>
					{/each}
				</dl>
			</div>
		{/each}
	</div>
</section>
