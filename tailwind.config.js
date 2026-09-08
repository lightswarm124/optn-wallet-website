/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        "background-dark": "#073a32",
        "background-light": "#fbfaf5",
        "text-light": "#244844",
        "text-dark": "#092f2c",
        "accent-primary": "#09894d",
        "accent-secondary": "#0a9b54",
        line: "#d7e2db",
        mint: "#e9f6ec",
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
  plugins: [require("@tailwindcss/typography")],
};
