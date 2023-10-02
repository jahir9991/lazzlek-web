/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#2563EB',
					100: '#60a5fa',
					200: '#3b82f6',
					300: '#2563EB',
					400: '#1d4ed8'
				},
				secondary: {
					DEFAULT: '#111827',
					100: '#4b5563',
					200: '#374151',
					300: '#1f2937',
					400: '#111827'
				},
				thirdly: {
					DEFAULT: '#64748b',
					100: '#64748b',
					200: '#475569',
					300: '#334155',
					400: '#1e293b'
				},
				dashboard: {
					red: '#F53E44',
					orange: '#EF6E4D',
					teal: '#21ABE8',
					purple: '#4852F8'
				},
				light: '#e5e5e6',
				inherit: 'inherit',
				transparent: 'transparent',
				current: 'currentColor'
			},
			borderColor: {
				inherit: 'inherit',
				transparent: 'transparent',
				current: 'currentColor'
			},
			container: {
				padding: '2rem'
			}
		}
	},
	darkMode: 'class',
	plugins: [require('tailwindcss-animated')]
};
