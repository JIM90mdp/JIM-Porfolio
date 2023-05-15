/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-green": "#1f492a",
        green1: "#ddefcf54",
        green2: "#a6f285",
        green3: "#97b382",
        green: "#ddefcf",
        "green-bg": "rgb(63, 92, 63)",
        "dark-green": "#12280c",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-green":
          "linear-gradient(90deg, rgba(53,89,61,1) 2%, rgba(58,97,42,1) 24%, rgba(151,179,130,1) 38%, rgba(221,239,207,1) 71%)",
      }),
      fontFamily: {
        playfair: ["Inria Serif", "serif"],
        mono: ["ui-monospace", "SFMono-Regular"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
