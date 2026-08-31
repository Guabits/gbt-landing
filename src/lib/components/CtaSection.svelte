<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
</script>

<section class="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
	<div class="border-base-300 bg-base-200/40 rounded-md border px-6 py-14 text-center sm:px-16 sm:py-20">
		<h2 class="font-display mx-auto max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
			Tu próxima posición, en el mercado que quieras
		</h2>
		<p class="text-base-content/70 mx-auto mt-4 max-w-md leading-relaxed">
			Sin filas de espera ni aprobación previa. Conecta una wallet y opera spot, perpetuos o predicción con el mismo colateral.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a href="#empezar" class="btn btn-primary rounded-sm px-6">
				Abrir cuenta gratis
				<ArrowRight size={16} strokeWidth={2} />
			</a>
			<a href="#mercados" class="btn btn-ghost border-base-300 rounded-sm border px-6"> Explorar mercados </a>
		</div>
	</div>
</section>
