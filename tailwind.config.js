module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sanss': ['Festive', 'Noto Serif KR'],
      'sanss2': ['MinSans-Regular', 'MinSans-Regular'],
    },
    
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
