/** @type {import('tailwindcss').Config} */

import colors from "./src/assets/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
      animation: { logoSpin: "logoSpin 5s linear infinite" },
      keyframes: {
        logoSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
