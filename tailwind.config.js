/**@type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: { mobile: "380px", tablet: "620px", desktop: "3100px" },
    },
  },
  plugins: [],
};
