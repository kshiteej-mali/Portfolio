/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#08080A',
        primary: '#D4FF00',
        secondary: '#00F5D4',
        surface: 'rgba(255, 255, 255, 0.03)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Geist Mono', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
