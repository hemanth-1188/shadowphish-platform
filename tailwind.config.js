/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          darkest: '#050816',
          dark: '#0B1120',
          obsidian: 'rgba(15, 23, 42, 0.65)',
          teal: '#00F5FF',
          neon: '#8B5CF6',
          crimson: '#FF3B5C',
          blue: '#3B82F6',
          accent: '#22C55E'
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #050816 0%, #0F172A 45%, #111827 100%)',
        'cyber-glow': 'linear-gradient(90deg, #00F5FF, #8B5CF6)',
        'danger-gradient': 'linear-gradient(90deg, #FF3B5C, #FF7A59)',
        'glass-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))'
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 0.8, filter: 'brightness(1)' },
          '50%': { opacity: 1, filter: 'brightness(1.3) drop-shadow(0 0 15px rgba(0, 245, 255, 0.6))' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
