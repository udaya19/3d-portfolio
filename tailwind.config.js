/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navColor: "#6c6d80",
        card: "#1d1836",
      },
    },
  },
  plugins: [],
};
