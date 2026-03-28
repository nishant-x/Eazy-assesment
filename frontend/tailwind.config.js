/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary: "#2563eb",
        secondary: "#1e293b"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },

      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.08)"
      }

    },
  },
  plugins: [],
}