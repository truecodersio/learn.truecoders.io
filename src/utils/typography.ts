// Imports

import Typography = require('typography')

export default new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  bodyWeight: '500',
  bodyColor: '#343a40',
  bodyFontFamily: [
    'Montserrat',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  headerWeight: '600',
  headerFontFamily: [
    'Montserrat',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400', '400i', '500', '500i', '600', '600i', '700', '700i'],
    },
  ],
  overrideStyles: ({ scale, rhythm }) => ({
    a: {
      color: 'inherit',
    },
    'a:hover': {
      color: 'inherit',
    },
    h1: {
      marginTop: '2.0em',
    },
    h2: {
      marginTop: '1.5em',
    },
    h3: {
      marginTop: '1.4em',
    },
    h4: {
      marginTop: '1.3em',
    },
    h5: {
      marginTop: '1.2em',
    },
    h6: {
      marginTop: '1.1em',
    },
  }),
})
