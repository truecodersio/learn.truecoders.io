declare const graphql: (query: TemplateStringsArray) => void

declare interface TypographyVerticalRhythm {
  rhythm: (value: number) => string,
  scale: (value: number) => Object,
  adjustFontSizeTo: (value?: number | string) => Object,
}

declare interface TypographyOptions {
  baseFontSize?: string,
  baseLineHeight?: number,
  scaleRatio?: number,
  googleFonts?: {
    name: string,
    styles: string[]
  }[],
  headerFontFamily?: string[],
  bodyFontFamily?: string[],
  headerColor?: string,
  bodyColor?: string,
  headerWeight?: number | string,
  bodyWeight?: number | string,
  boldWeight?: number | string,
  blockMarginBottom?: number,
  includeNormalize?: boolean,
  overrideStyles?: (
    verticalRhythm: TypographyVerticalRhythm,
    options: TypographyOptions,
    styles: any,
  ) => Object,
  overrideThemeStyles?: (
    verticalRhythm: TypographyVerticalRhythm,
    options: TypographyOptions,
    styles: any,
  ) => Object,
  plugins?: any[],
}

declare module 'typography' {
  class Typography {
    constructor(opts: TypographyOptions)
  }
  export = Typography
}
