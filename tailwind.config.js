/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        gold: '#e8b86d',
        'gold-dim': 'rgba(232,184,109,0.5)',
        dark: {
          bg: '#08080c',
          surface: 'rgba(255,255,255,0.02)',
          border: 'rgba(255,255,255,0.08)',
          muted: 'rgba(245,240,232,0.45)',
          text: '#f5f0e8',
        },
        light: {
          bg: '#faf8f4',
          surface: 'rgba(0,0,0,0.02)',
          border: 'rgba(0,0,0,0.08)',
          muted: 'rgba(30,20,10,0.45)',
          text: '#1a1208',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
