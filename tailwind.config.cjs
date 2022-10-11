/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      md: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "2xl": ["28px", "36px"],
      "3xl": ["32px", "40px"],
      "4xl": ["44px", "56px"],
      "5xl": ["56px", "60px"],
    },

    colors: {
      red: {
        300: "#E5383B",
        500: "#BA181B",
        700: "#941B1D",
      },
      Black: {
        300: "#161A1D",
        500: "#0B090A",
      },
      White: {
        300: "#F5F3F4",
        500: "#FFFFFF",
        700: "#D9D9D9",
      },
    },

    extend: {},
  },
  plugins: [],
};
