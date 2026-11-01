/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F4EBDD',
          light: '#FAF5ED',
          dark: '#E5D8C5',
          muted: '#DFD0B8',
        },
        vermilion: {
          DEFAULT: '#C83E17',
          dark: '#A63110',
          light: '#DE4D23',
          soft: '#F5EAE6',
        },
        ink: {
          DEFAULT: '#211B18',
          deep: '#130F0D',
          soft: '#332A26',
          muted: '#635852',
          border: 'rgba(33, 27, 24, 0.15)',
        },
        gold: {
          DEFAULT: '#B59A69',
          light: '#CBB892',
          dark: '#947B4B',
        },
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        editorial: '0.08em',
        wide: '0.15em',
        widest: '0.28em',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
