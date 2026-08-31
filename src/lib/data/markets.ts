export interface TickerItem {
	symbol: string;
	price: string;
	change: number;
	kind: 'spot' | 'perp';
}

export const tickerItems: TickerItem[] = [
	{ symbol: 'BTC/USD', price: '68,412.50', change: 2.31, kind: 'spot' },
	{ symbol: 'ETH-PERP', price: '3,284.90', change: 1.08, kind: 'perp' },
	{ symbol: 'SOL/USD', price: '178.22', change: -1.42, kind: 'spot' },
	{ symbol: 'HYPE-PERP', price: '24.61', change: 5.67, kind: 'perp' },
	{ symbol: 'ARB/USD', price: '0.812', change: -0.35, kind: 'spot' },
	{ symbol: 'BTC-PERP', price: '68,398.00', change: 2.19, kind: 'perp' },
	{ symbol: 'AVAX/USD', price: '31.05', change: 0.94, kind: 'spot' },
	{ symbol: 'DOGE-PERP', price: '0.1642', change: -2.03, kind: 'perp' },
	{ symbol: 'SUI/USD', price: '3.94', change: 3.28, kind: 'spot' },
	{ symbol: 'ETH/USD', price: '3,281.15', change: 1.02, kind: 'spot' }
];

export interface PredictionMarket {
	question: string;
	category: string;
	yesPrice: number;
	volume: string;
	closes: string;
}

export const predictionMarkets: PredictionMarket[] = [
	{
		question: '¿BTC cierra 2026 por encima de $120,000?',
		category: 'Cripto',
		yesPrice: 0.64,
		volume: '$4.2M',
		closes: '31 dic 2026'
	},
	{
		question: '¿La Fed recorta tasas en la próxima reunión?',
		category: 'Macro',
		yesPrice: 0.37,
		volume: '$1.8M',
		closes: '18 sep 2026'
	},
	{
		question: '¿Hyperliquid supera $10B en TVL este trimestre?',
		category: 'On-chain',
		yesPrice: 0.52,
		volume: '$960K',
		closes: '30 sep 2026'
	},
	{
		question: '¿ETH flippening de OI supera a BTC en perpetuos?',
		category: 'Derivados',
		yesPrice: 0.21,
		volume: '$610K',
		closes: '15 oct 2026'
	}
];
