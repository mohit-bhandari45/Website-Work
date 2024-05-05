/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "bg-1":"url('/icons/WhatsApp Image 2024-05-05 at 14.14.22_d6498270.jpg')"
      },
    },
  },
  plugins: [],
}