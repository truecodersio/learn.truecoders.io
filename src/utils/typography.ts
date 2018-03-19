import * as Typography from 'typography'

const typography = new Typography({
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
  overrideStyles: ({ scale, rhythm }: any) => ({
    a: {
      color: 'inherit',
    },
    'a:hover': {
      color: 'inherit',
    },
  }),
})

export default typography
