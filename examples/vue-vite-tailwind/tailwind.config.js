const { config } = require("@charcoal-ui/tailwind-config");

module.exports = {
  darkMode: "media",
  presets: [config],
  content: ["./src/**/*.vue"],
  theme: {
    extend: {},
  },
  plugins: [],
};
