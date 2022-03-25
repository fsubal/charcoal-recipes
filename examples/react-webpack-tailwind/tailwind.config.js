const { config } = require("@charcoal-ui/tailwind-config");

module.exports = {
  darkMode: false,
  presets: [config],
  content: ["./src/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
