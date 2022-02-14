export const colors = {
  primary: '#004175',
  secondary: '#007ce0',
  black: '#000e1a',
  white: '#fffffe'
}
export const breakpoints = ['40em', '52em', '64em']
export const space = [0, 2, 4, 8, 10, 12, 14, 16, 32, 64, 128, 256, 512]
export const sizes = space.map((item) => `${item}px`)
export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72]
export const fonts = {
  body: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  heading: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  monospace: 'Menlo, monospace'
}
export const radii = [0, 2, 4, 8, 16, 32]
export const fontWeights = {
  regular: 400,
  bold: 500,
  light: 300
}
export const lineHeights = {
  body: 1.5
}
export const shadows = {
  none: 'none!important',
  sm: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)',
  md: '0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%)',
  lg: '0 8px 17px 2px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%), 0 5px 5px -3px rgb(0 0 0 / 20%)',
  xl: '0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -7px rgb(0 0 0 / 20%)',
  xxl: '0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%), 0 11px 15px -7px rgb(0 0 0 / 20%)'
}

export const theme = {
  colors,
  breakpoints,
  fontSizes,
  space,
  sizes,
  fonts,
  radii,
  fontWeights,
  lineHeights,
  shadows
}
