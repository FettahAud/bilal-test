module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      pop: ['Poppins', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      unbounded: ['Unbounded', 'sans-serif'],
      urbanist: ['Urbanist', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
