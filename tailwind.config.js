/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "background-dark": "#0b0c10",
        "background-light": "#1f2833",
        "text-light": "#c5c6c7",
        "accent-primary": "#66fcf1",
        "accent-secondary": "#45a29e",
      },
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },
      keyframes: {
        fadeOut: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
