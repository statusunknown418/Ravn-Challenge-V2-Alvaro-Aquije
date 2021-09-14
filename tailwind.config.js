module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // * Config for the custom font
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        "ravn-black": "#121212",
        "light-text": "#828282",
        "darker-text": "#333333",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
