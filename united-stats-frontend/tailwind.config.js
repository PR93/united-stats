module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '2xl-max': {'max': '1535px'},
        'xl-max': {'max': '1279px'},
        'lg-max': {'max': '1023px'},
        'md-max': {'max': '767px'},
        'sm-max': {'max': '639px'},
        '2xl-min': {'min': '1535px'},
        'xl-min': {'min': '1279px'},
        'lg-min': {'min': '1023px'},
        'md-min': {'min': '767px'},
        'sm-min': {'min': '639px'},
      },
      colors: {
          united: {
            yellow0: '#646001',
            yellow1: '#fbf104',
            yellow2: '#a2990c',
            yellow3: '#feee01',
            red0: '#e42c23',
            red1: '#B2746C',
            red2: '#bd1c1f',
            red3: '#98191c',
            red4: '#8b151b',
            orange: '#de7023',
            graphite: {
              100: "#d3d2d3",
              200: "#a7a5a7",
              300: "#7c787a",
              400: "#504b4e",
              500: "#241e22",
              600: "#1d181b",
              700: "#161214",
              800: "#0e0c0e",
              900: "#070607"
            },
          },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
