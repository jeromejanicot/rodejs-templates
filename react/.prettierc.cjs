module.exports = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  useTabs: false,
  tailwindConfig: "./tailwind.config.js",
  plugins: [require('prettier-plugin-tailwindcss')],
};
