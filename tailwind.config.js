/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "40.625em",
      lg: "76.625em",
      xl: "120em",
    },
    colors: {
      light: "#F7F7FF",
      dark: "#212630",
      primary: "#37496D",
      boxes: "#151A28",
      hover: "#000000",
      header: "#5ed3f3",
    },
    fontFamily: {
      cinzel: ["Cinzel", "serif"],
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      spacing: {
        box: "305px",
        med: "625px",
      },
      boxShadow: {
        "3xl": "0 20px 50px -15px rgba(0,0,0,0.6)",
      },
      gap: {
        3.7: "15px",
      },
      keyframes: {
        attract: {
          "75%, 100%": {
            transform: "scale(0.3)",
            opacity: 0,
          },
        },
      },
      animation: {
        attract: "attract 6s cubic-bezier(0,0,0.4,1) infinite ",
        spinner: "spin 12s linear infinite",
      },
    },
  },
  plugins: [],
};
