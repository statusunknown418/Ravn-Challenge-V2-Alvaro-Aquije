module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // * Config for the custom font
      fontFamily: {
        inter: "Inter",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
