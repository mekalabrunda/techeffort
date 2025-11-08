import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        text: { primary: '#1f2937', muted: '#6b7280' }, // slate-800 / slate-500
        surface: { card: '#ffffff', tile: '#ffffff' },
        bg: { body: '#f4f5f7' }
      },
      borderRadius: {
        xl: '24px',
        lg: '18px'
      },
      boxShadow: {
        card: '0 18px 50px rgba(0,0,0,.10)',
        tile: '0 12px 30px rgba(0,0,0,.08)'
      }
    }
  },
  plugins: []
} satisfies Config
