<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import TickerTape from '$lib/components/TickerTape.svelte';
	import MarketsLedger from '$lib/components/MarketsLedger.svelte';
	import HyperliquidSection from '$lib/components/HyperliquidSection.svelte';
	import PredictionMarkets from '$lib/components/PredictionMarkets.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import CtaSection from '$lib/components/CtaSection.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const title = 'Guabits Markets — Spot, perpetuos y mercados de predicción sobre Hyperliquid';
	const description =
		'Opera spot, perpetuos con hasta 50x y mercados de predicción desde una sola cuenta, sobre el libro de órdenes on-chain de Hyperliquid.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Navbar />

<main>
	<Hero />
	<TickerTape />
	<MarketsLedger />
	<HyperliquidSection />
	<PredictionMarkets />
	<HowItWorks />
	<CtaSection />
</main>

<Footer />
