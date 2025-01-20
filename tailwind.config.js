/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    'bg-blue-500',
    'hover:bg-blue-700',
    'bg-yellow-500',
    'hover:bg-yellow-700',
    'bg-red-500',
    'hover:bg-red-700',
    'disabled:bg-blue-300',
    'disabled:bg-yellow-300',
    'disabled:bg-red-300',
    'text-green-700',
    'text-red-700',
    'text-black-700',
    'scale-150',
  ],
  plugins: [],
}