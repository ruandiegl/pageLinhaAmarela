/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          blue: '#1B2B44',
          orange: '#FF6B00',
          graphite: '#333333',
          steel: '#F4F7F9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
