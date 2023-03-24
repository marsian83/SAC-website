/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ef4e52",
        secondary: "#9090DC",
        tertiary: "#aad9d9",
        background: "#000235",
        foreground: "#000000",
        front: "#ffffff",
        back: "#000000",
        mute: "#3d3e48",
      },
      transitionDuration: {
        inherit: "inherit",
      },
      borderRadius: {
        "4xl": "2rem",
        "5rem": "5rem",
        "10rem": "10rem",
      },
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      fontFamily: {
        outfit: "'Outfit', sans-serif",
      },
      rotate: {
        full: "360deg",
      },
    },
  },
  plugins: [],
};
