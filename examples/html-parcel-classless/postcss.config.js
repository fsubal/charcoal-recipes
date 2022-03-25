module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.config.js"),
    require('postcss-nested'),
    require("autoprefixer"),
    process.env.NODE_ENV === 'production' && require('cssnano')
  ].filter(Boolean),
};
