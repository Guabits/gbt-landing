const LIGHT = 'daybook';
const DARK = 'nightbook';

class ThemeState {
	current = $state<'daybook' | 'nightbook'>('nightbook');

	constructor() {
		if (typeof document !== 'undefined') {
			const attr = document.documentElement.getAttribute('data-theme');
			if (attr === LIGHT || attr === DARK) this.current = attr;
		}
	}

	toggle() {
		this.set(this.current === DARK ? LIGHT : DARK);
	}

	set(theme: 'daybook' | 'nightbook') {
		this.current = theme;
		if (typeof document !== 'undefined') {
			document.documentElement.setAttribute('data-theme', theme);
			localStorage.setItem('theme', theme);
		}
	}
}

export const themeState = new ThemeState();
