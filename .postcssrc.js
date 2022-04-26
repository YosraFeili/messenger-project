module.exports = {
  plugins: [
    // to edit target browsers: use "browserslist" field in package.json
    require('autoprefixer'),
    require('tailwindcss')
  ]
}

const conflictingClasses = [

];
// The plugin takes an object where the keys are the selectors and the values are the properties (or list of properties) to remove or all properties with "*".
const removeObj = {
  ...Object.fromEntries(conflictingClasses.map(cc => [`.${cc}`, "*"])), // Removes all properties from conflicting classes
  body: ["font-family", "font-size"] // You can also remove things like fonts and colors.
};
