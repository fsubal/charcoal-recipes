const { config } = require("@charcoal-ui/tailwind-config");

module.exports = {
  darkMode: "media",
  content: ["example/*.html"],
  presets: [config],
  theme: {
    extend: {
      opacity: {
        32: "0.32",
      },
    },
  },
};
