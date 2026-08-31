<script lang="ts">
	interface Props {
		size?: number;
		withWordmark?: boolean;
		class?: string;
	}

	let { size = 28, withWordmark = true, class: className = '' }: Props = $props();
</script>

<div class="flex items-center gap-2.5 {className}">
	<svg
		width={size}
		height={size}
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Guabits Markets logo"
	>
		<line x1="7.5" y1="9" x2="7.5" y2="25" stroke="var(--candle-down)" stroke-width="1.4" />
		<rect x="5.5" y="13" width="4" height="9" rx="0.5" fill="var(--candle-down)" />

		<line x1="14.5" y1="2.5" x2="14.5" y2="21" stroke="var(--candle-up)" stroke-width="1.4" />
		<rect x="12.5" y="5.5" width="4" height="13" rx="0.5" fill="var(--candle-up)" />

		<line x1="21.5" y1="6.5" x2="21.5" y2="20" stroke="var(--candle-up)" stroke-width="1.4" />
		<rect x="19.5" y="9.5" width="4" height="8.5" rx="0.5" fill="var(--candle-up)" />

		<line x1="28.5" y1="12" x2="28.5" y2="27" stroke="var(--candle-down)" stroke-width="1.4" />
		<rect x="26.5" y="15" width="4" height="7.5" rx="0.5" fill="var(--candle-down)" />
	</svg>

	{#if withWordmark}
		<span class="font-display text-base-content text-lg leading-none font-semibold tracking-tight">
			Guabits Markets
		</span>
	{/if}
</div>
