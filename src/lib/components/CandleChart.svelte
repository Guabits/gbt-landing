<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	interface Candle {
		id: number;
		open: number;
		close: number;
		high: number;
		low: number;
	}

	const WIDTH = 600;
	const HEIGHT = 340;
	const PAD_Y = 28;
	const VISIBLE = 22;
	const CANDLE_W = 14;
	const GAP = (WIDTH - VISIBLE * CANDLE_W) / (VISIBLE + 1);

	let seed = 41207;
	function rand() {
		// deterministic PRNG so server/client render identically (no hydration mismatch)
		seed = (seed * 1103515245 + 12345) & 0x7fffffff;
		return (seed / 0x7fffffff) * 2 - 1;
	}

	function nextCandle(id: number, prevClose: number): Candle {
		const drift = rand() * 2.4 + Math.sin(id * 0.35) * 1.1;
		const open = prevClose;
		const close = Math.max(20, open + drift);
		const high = Math.max(open, close) + Math.abs(rand()) * 1.6;
		const low = Math.min(open, close) - Math.abs(rand()) * 1.6;
		return { id, open, close, high, low };
	}

	function seedCandles(): Candle[] {
		const out: Candle[] = [];
		let prev = 100;
		for (let i = 0; i < VISIBLE; i++) {
			const c = nextCandle(i, prev);
			out.push(c);
			prev = c.close;
		}
		return out;
	}

	let candles = $state<Candle[]>(seedCandles());
	let nextId = $state(VISIBLE);

	let low = $derived(Math.min(...candles.map((c) => c.low)));
	let high = $derived(Math.max(...candles.map((c) => c.high)));
	let range = $derived(Math.max(high - low, 1));

	function y(value: number) {
		return HEIGHT - PAD_Y - ((value - low) / range) * (HEIGHT - PAD_Y * 2);
	}

	let lastCandle = $derived(candles[candles.length - 1]);
	let isUp = $derived(lastCandle.close >= lastCandle.open);
	let lastPrice = $derived(lastCandle.close.toFixed(2));

	let linePath = $derived(
		candles
			.map((c, i) => `${i === 0 ? 'M' : 'L'} ${GAP + i * (CANDLE_W + GAP) + CANDLE_W / 2} ${y(c.close)}`)
			.join(' ')
	);

	$effect(() => {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduceMotion) return;

		const interval = setInterval(() => {
			const prevClose = candles[candles.length - 1].close;
			const fresh = nextCandle(nextId, prevClose);
			nextId += 1;
			candles = [...candles.slice(1), fresh];
		}, 1700);

		return () => clearInterval(interval);
	});
</script>

<div class="relative">
	<svg
		viewBox="0 0 {WIDTH} {HEIGHT}"
		class="w-full overflow-visible"
		role="img"
		aria-label="Gráfico de velas japonesas en vivo"
	>
		{#each [0.25, 0.5, 0.75] as line (line)}
			<line
				x1="0"
				x2={WIDTH}
				y1={PAD_Y + line * (HEIGHT - PAD_Y * 2)}
				y2={PAD_Y + line * (HEIGHT - PAD_Y * 2)}
				class="stroke-base-content/[0.06]"
				stroke-width="1"
			/>
		{/each}

		<path d={linePath} fill="none" class="stroke-primary/40" stroke-width="1.5" />

		{#each candles as candle, i (candle.id)}
			{@const cx = GAP + i * (CANDLE_W + GAP) + CANDLE_W / 2}
			{@const up = candle.close >= candle.open}
			{@const bodyTop = y(Math.max(candle.open, candle.close))}
			{@const bodyBottom = y(Math.min(candle.open, candle.close))}
			<g
				in:fly={{ x: 24, duration: 420 }}
				out:fade={{ duration: 150 }}
				style:color={up ? 'var(--candle-up)' : 'var(--candle-down)'}
			>
				<line x1={cx} x2={cx} y1={y(candle.high)} y2={y(candle.low)} stroke="currentColor" stroke-width="1.3" />
				<rect
					x={cx - CANDLE_W / 2}
					y={bodyTop}
					width={CANDLE_W}
					height={Math.max(bodyBottom - bodyTop, 1.5)}
					rx="1"
					fill="currentColor"
				/>
			</g>
		{/each}
	</svg>

	<div
		class="border-base-300 bg-base-100/90 absolute top-0 right-0 flex items-center gap-2 rounded-sm border px-2.5 py-1 text-xs backdrop-blur"
	>
		<span class="font-mono-num font-medium" class:text-success={isUp} class:text-error={!isUp}>
			${lastPrice}
		</span>
		<span
			class="h-1.5 w-1.5 rounded-full"
			class:bg-success={isUp}
			class:bg-error={!isUp}
			style="box-shadow: 0 0 0 3px color-mix(in oklch, currentColor 20%, transparent)"
		></span>
	</div>
</div>
