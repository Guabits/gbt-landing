<script lang="ts">
	import Logo from './Logo.svelte';

	const columns = [
		{
			title: 'Producto',
			links: [
				{ label: 'Spot', href: '#mercados' },
				{ label: 'Perpetuos', href: '#mercados' },
				{ label: 'Predicción', href: '#prediccion' },
				{ label: 'Comisiones', href: '#' }
			]
		},
		{
			title: 'Recursos',
			links: [
				{ label: 'Documentación', href: '#' },
				{ label: 'Estado del sistema', href: '#' },
				{ label: 'API', href: '#' },
				{ label: 'Seguridad', href: '#' }
			]
		},
		{
			title: 'Compañía',
			links: [
				{ label: 'Sobre Guabits Markets', href: '#' },
				{ label: 'Términos', href: '#' },
				{ label: 'Privacidad', href: '#' },
				{ label: 'Contacto', href: '#' }
			]
		}
	];
</script>

<footer class="border-base-300 border-t">
	<div class="mx-auto max-w-6xl px-5 py-14 sm:px-8">
		<div class="grid gap-10 sm:grid-cols-[1.3fr_repeat(3,1fr)] sm:gap-6">
			<div>
				<Logo />
				<p class="text-base-content/60 mt-4 max-w-[26ch] text-sm leading-relaxed">
					Spot, perpetuos y mercados de predicción sobre la infraestructura on-chain de Hyperliquid.
				</p>
			</div>

			{#each columns as col (col.title)}
				<div>
					<p class="text-base-content/50 text-xs font-medium">{col.title}</p>
					<ul class="mt-4 space-y-2.5">
						{#each col.links as link (link.label)}
							<li>
								<a href={link.href} class="text-base-content/70 hover:text-base-content text-sm transition-colors">
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div class="border-base-300 text-base-content/45 mt-12 flex flex-col gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
			<p>© {new Date().getFullYear()} Guabits Markets. Los derivados y mercados de predicción implican riesgo de pérdida total.</p>
			<p>Guabits Markets no está disponible en jurisdicciones restringidas.</p>
		</div>
	</div>
</footer>
