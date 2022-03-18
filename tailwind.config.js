module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    
    extend: {
      width: {
        't01': '32.5rem',
        't02': '25rem',
        't03': '15.625rem',
        't04': '12.5rem',
        't05': '11.25rem',

        'p01': '11.875rem',
        'p02': '9.375rem',
        'p03': '7.5rem',
        'p04': '6.25rem',
        'p05': '5rem',
        'p06': '3.75rem',
        'p07': '2.5rem',
        'p08': '2rem',

        'c01': '66.875rem',
        'c02': '32.5rem',
        'c03': '25rem',
        'c04': '20rem',
        'c05': '18.75rem',
        'c06': '11.25rem',

      },
      height: {
        't01': '32.5rem',
        't02': '25rem',
        't03': '15.625rem',
        't04': '12.5rem',
        't05': '11.25rem',

        'p01': '11.875rem',
        'p02': '9.375rem',
        'p03': '7.5rem',
        'p04': '6.25rem',
        'p05': '5rem',
        'p06': '3.75rem',
        'p07': '2.5rem',
        'p08': '2rem',

        'c01': '25rem',
        'c02': '18.75rem',
        'c03': '17.5rem',
        'c04': '12.5rem',
        'c05': '25rem',
        'c06': '11.25rem',

        'b01': '5rem',
        'b02': '3.75rem',
        'b03': '2.625rem',

        'I00': '3rem',
        'I01': '3.5rem',
        'I02': '7.5rem',
        'I03': '13.75rem',
      },
      colors: {
        dgray: {
          100: '#F7FAFC',
          200: '#EDF1F6',
          300: '#CCD5E0',
          400: '#A1ADC0',
          500: '#727F96',
          600: '#1B202C',

          900: '#1ABC9C', //얘는 그린
        },
        dred: {
          100: '#FEEAED',
          200: '#F9A9B5',
          300: '#FF526D',
          400: '#DB4A60',
          500: '#B94153',

        },
        dpurple: {
          100: '#EDDFFF',
          200: '#9262F7',
          300: '#752BD9',
          400: '#5619A9',
        },
        
      },
      customForms: theme => ({
        default: {
          checkbox: {
            'borderRadius': undefined,
            'color': theme('colors.dpurple.200'),
            '&:focus': {
              boxShadow: undefined,
              borderColor: undefined,
            },
            radio: {
              'color': theme('colors.dpurple.200'),
              '&:focus': {
                outline: 'none',
                '--ring-offset-shadow': undefined,
                '--ring-shadow': undefined,
              },
            },
          },
        },
          
      })
    },
    
    fontFamily: {
      'sanss': ['Festive', 'Noto Serif KR'],
      'sanss2': ['MinSans-Bold', 'MinSans-Regular'],
      'minB' : ['MinSans-Bold', 'MinSans-Bold'],
      'min1' : ['MinSans-Medium', 'MinSans-Medium'],
      'min2' : ['MinSans-Regular', 'MinSans-Regular'],
      'min3' : ['MinSans-Light', 'MinSans-Light'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '1rem',

      'base': '1.125rem',
      'lg': '1.25rem',

      'xl': '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.813rem',
      '5xl': '5rem',
      '6xl': '6rem',

      '7xl': '0.625rem',
    },
    
  },
  variants: {
    gridAutoFlow: ['responsive', 'hover', 'focus'],
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('tw-elements/dist/plugin'),
     require('@tailwindcss/custom-forms'),
  ],
}
