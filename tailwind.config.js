module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        csgo: '#E5993B',
        dota2: '#753188',
        pubg: '#9AE66E'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
