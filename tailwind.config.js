/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        primary: '#1DA1F2',  // Add a primary color
        secondary: '#14171A',  // Add a secondary color
        accent: '#F5F8FA',  // Add an accent color
        muted: '#657786',}
    },
    fontFamily: {
      arial: ['Arial', 'sans-serif'],
    },
  },
  plugins: [],
}

