/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D3436',
        secondary: '#636E72',
        accent: '#00FFB2',
        'accent-light': '#00FFB2',
        'accent-dark': '#00CC8E',
        background: '#E5E7EB',
        'card-bg': '#FFFFFF',
        'text-primary': '#2D3436',
        'text-secondary': '#636E72',
        'gradient-1': '#00FFB2',
        'gradient-2': '#00CC8E',
        'gradient-3': '#009966',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'neon': '0 0 10px rgba(0, 255, 178, 0.5), 0 0 20px rgba(0, 255, 178, 0.3), 0 0 30px rgba(0, 255, 178, 0.1)',
      },
    },
  },
  plugins: [],
} 