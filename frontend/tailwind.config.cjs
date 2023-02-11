/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chick: ["ONE-Mobile-POP"],
      },
    },
    fontSize: {
      sm: "0.812rem",
      base: "1rem",
      lg: "1.250rem",
      xl: "1.562rem",
      "2xl": "1.938rem",
      "3xl": "2.438rem",
      "4xl": "3.062rem",
      "5xl": "3.812rem",
    },
    colors: {
      blue: {
        50: "#f0f8ff",
        100: "#cfe8ff",
        200: "#add8ff",
        300: "#8cc8ff",
        400: "#6bb8ff",
        500: "#57a2e8",
        600: "#4286c6",
        700: "#2f6ca4",
        800: "#205382",
        900: "#133b60",
      },
      emerald: {
        50: "#f9fffe",
        100: "#e0fff9",
        200: "#c8fff4",
        300: "#b2e9de",
        400: "#9acfc5",
        500: "#84b6ac",
        600: "#6e9c93",
        700: "#5a837b",
        800: "#466a62",
        900: "#34504a",
      },
      skyblue: {
        50: "#f7fbfc",
        100: "#dcf3f8",
        200: "#c2eaf3",
        300: "#a9d1d9",
        400: "#92b7c0",
        500: "#7b9ea6",
        600: "#65868d",
        700: "#516d74",
        800: "#3d555a",
        900: "#2a3c41",
      },
      pink: {
        50: "#ffeff5",
        100: "#ffcadf",
        200: "#ffa6c9",
        300: "#ff82b3",
        400: "#ff5d9d",
        500: "#e64485",
        600: "#c42d69",
        700: "#a21a50",
        800: "#800c3a",
        900: "#5e0227",
      },
      yellow: {
        50: "#feffe8",
        100: "#fdffb6",
        200: "#fcff83",
        300: "#fbff51",
        400: "#eef21c",
        500: "#cdd00c",
        600: "#abae00",
        700: "#8a8c00",
        800: "#686a00",
        900: "#474800",
      },
      gray: "#B0ADAD",
      white: "#FFFFFF",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
