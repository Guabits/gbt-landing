<script lang="ts">
	const steps = [
		{
			n: '01',
			title: 'Conecta tu wallet',
			description: 'MetaMask, Rabby o cualquier wallet compatible con EVM. Sin formularios, sin KYC para operar en modo no custodial.'
		},
		{
			n: '02',
			title: 'Deposita colateral',
			description: 'USDC entra directo a tu cuenta de margen. Un solo saldo respalda tus posiciones en spot, perpetuos y predicción.'
		},
		{
			n: '03',
			title: 'Elige el mercado',
			description: 'Cambia entre libros de órdenes de spot, perpetuos y eventos de predicción sin salir del panel ni mover fondos.'
		},
		{
			n: '04',
			title: 'Ejecuta con precisión',
			description: 'Órdenes límite, stop y TWAP con la latencia de un motor on-chain optimizado para alta frecuencia.'
		}
	];
</script>

<section id="empezar" class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
	<h2 class="font-display max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">De la wallet a tu primera orden en minutos</h2>

	<div class="border-base-300 mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border bg-base-300 sm:grid-cols-2 lg:grid-cols-4">
		{#each steps as step (step.n)}
			<div class="bg-base-100 px-6 py-8">
				<span class="font-mono-num text-base-content/40 text-sm">{step.n}</span>
				<h3 class="font-display mt-3 text-base font-semibold">{step.title}</h3>
				<p class="text-base-content/70 mt-2.5 text-sm leading-relaxed">{step.description}</p>
			</div>
		{/each}
	</div>
</section>
