/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [],
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
};
