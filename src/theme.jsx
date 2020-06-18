import { createMuiTheme }  from '@material-ui/core/styles'


// check it 
// https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

const theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: {
      main: '#363537',
    },
  },
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175',
  },
})

export default theme
