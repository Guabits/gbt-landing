<script lang="ts">
	const stats = [
		{ value: '200k+', label: 'Órdenes por segundo' },
		{ value: '0.2s', label: 'Finalidad de bloque' },
		{ value: '100%', label: 'Libro de órdenes on-chain' },
		{ value: '$0', label: 'Costo de gas por orden' }
	];
</script>

<section id="hyperliquid" class="border-base-300 border-t">
	<div class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
		<div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
			<div>
				<h2 class="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
					La velocidad de un exchange centralizado, la transparencia de la cadena
				</h2>
				<p class="text-base-content/70 mt-4 leading-relaxed">
					Guabits Markets no es un fork con una capa nueva encima: el emparejamiento, la liquidación y el financiamiento corren directamente sobre el L1 de Hyperliquid. Cada orden queda registrada en la cadena antes de ejecutarse, así que puedes auditar el libro completo en cualquier momento.
				</p>
				<p class="text-base-content/70 mt-4 leading-relaxed">
					El resultado es un motor capaz de sostener el volumen de un exchange centralizado sin pedirte que confíes en un intermediario para custodiar tus fondos o decidir una liquidación.
				</p>
			</div>

			<div class="border-base-300 grid grid-cols-2 gap-px overflow-hidden rounded-md border bg-base-300 sm:grid-cols-4">
				{#each stats as stat (stat.label)}
					<div class="bg-base-100 flex flex-col justify-center px-5 py-7">
						<span class="font-mono-num font-display text-2xl font-semibold sm:text-3xl">{stat.value}</span>
						<span class="text-base-content/55 mt-1.5 text-xs leading-snug">{stat.label}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
