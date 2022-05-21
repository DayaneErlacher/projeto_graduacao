import { createTheme } from '@material-ui/core/styles'

export default createTheme({
  palette: {
    primary: {
      main: '#272727',
      light: 'rgba(196, 196, 196,.15)',
    },
    secondary: {
      main: '#CCCB14',
      dark: '#13415F',
      extra: '#2C8ED4', //só pra guardar a cor, atributo não funcionará
    },
    text: {
      textPrimary: '#fff',
      disable: '#A3A3A3',
      backgroundEnable: '#fff',
      backgroundDisable: '#C4C4C4',
    },
  },
});
