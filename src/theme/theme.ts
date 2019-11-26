import {darken, lighten} from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import {primaryColor, primaryLightColor, white} from './colors'

import {fontFamilyRoboto} from './font'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      dark: darken(primaryColor, 0.2),
      // medium: primaryLightColor,
      contrastText: white,
      light: lighten(primaryColor, 0.4),
    },
  },
  shape: {
    borderRadius: 3,
  },
  typography: {
    fontFamily: fontFamilyRoboto,
    h5: {
      fontSize: '24px',
      fontWeight: 'normal',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 'normal',
      lineHeight: '28px',
      letterSpacing: '0.5px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '20px',
      letterSpacing: '0.25px',
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 'normal',
      lineHeight: '24px',
      letterSpacing: '0.15px',
      // height: '24px',
    },
  },
})

export default theme
