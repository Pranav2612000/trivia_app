module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["btn-primary", "text-primary", "text-secondary", "text-heading", "text-content"],
  theme: {
    extend: {
      fontFamily: {
        londrina: ["Londrina Outline", "sans-serif"],
        specialElite: ["Special Elite", "sans-serif"],
      },
    },
  },
  plugins: [],
};
