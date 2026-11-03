/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6',
        'primary-dark': '#142D4E',
        'light-bg': '#F3F6FA',
        border: '#e5e7eb',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
