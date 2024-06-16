/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "365px",
        xsm: "600px",
        sm: "640px",
        md: "765px",
        xmd: "815px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        White: "#FFFFFF",
        Black: "#17181C",
        Blue: "#3874FF",
        Red: "#D55438",
        Green: "#0BAB86",
        Gray: "#23252F",
        Darkblack: "#131315",
        LightGray: "#B1B5C3",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        flip: "flip 2s linear infinite",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [],
};
