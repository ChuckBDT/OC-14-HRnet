/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2a2d32",
        secondary: "#fbfafe",
        tertiary: "#fffefe",
        toggleActive: "#29a1fa",
        toggleDefault: "#898889",
        alertLight: "#fee9e9",
        alertDark: "#df402e",
      },
    },
  },
  plugins: [],
};
