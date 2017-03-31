import {RkColors} from './color'

export const Values = {
  primary: '#397edc',
  primaryActive: '#2d63ad',
  success: '#22c93d',
  successActive: '#1dab35',
  info: '#19bfe5',
  infoActive: '#17adcf',
  warning: '#feb401',
  warningActive: '#eba502',
  danger: '#ed1c4d',
  dangerActive: '#c2173f',
  foreground: '#000000dd',
  background: '#fff',
  overlay: '#00000057',
  fontSize: 15,
};

export const DefaultTheme = {
  colors: {
    primary: Values.primary,
    primaryActive: Values.primaryActive,
    success: Values.success,
    successActive: Values.successActive,
    info: Values.info,
    infoActive: Values.infoActive,
    warning: Values.warning,
    warningActive: Values.warningActive,
    danger: Values.danger,
    dangerActive: Values.dangerActive,
    foreground: Values.foreground,
    background: Values.background,
    overlay: Values.overlay,

    text: {
      base: Values.foreground,
      additional: Values.background,
      subtitle: Values.foreground,
      hint: '#0000008e'
    },
    back: {
      base: Values.background,
      button: Values.primary,
      primary: Values.primary,
      primaryActive: Values.primaryActive,
      success: Values.success,
      successActive: Values.successActive,
      info: Values.info,
      infoActive: Values.infoActive,
      warning: Values.warning,
      warningActive: Values.warningActive,
      danger: Values.danger,
      dangerActive: Values.dangerActive,
      foreground: Values.foreground,
      background: Values.background,
      outline: RkColors.transparent,
      material : Values.primary
    },
    border: {
      base: Values.primary,
      underline: '#0000001A',
      solid: '#0000003B',
      material: Values.warning
    }
  },
  fonts: {
    sizes: {
      base: Values.fontSize,
      small: Values.fontSize * .8,
      medium: Values.fontSize,
      large: Values.fontSize * 1.2,
      xlarge: Values.fontSize / 0.75,
      xxlarge: Values.fontSize * 1.6,
    }
  }
};